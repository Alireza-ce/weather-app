import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { SnackBar } from '../../services/snack-bar.service';
import { WeatherDetail,List } from '../../models/weather-detail.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  public weatherDetail: WeatherDetail;
  public lastDay:List[] = [];
  cityId: number;

  constructor(
    private openSnackBar: SnackBar,
    private weatherApi: WeatherService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cityId = this.activatedRoute.snapshot.params.id;
    this.getCity();
  }

  setLastDays(){
    for(let index = 0 ; index < 4 ; index++){
      this.weatherDetail.list[index].url = `assets/svg/${this.weatherDetail.list[index].weather[0].main}.svg`
      this.lastDay.push(this.weatherDetail.list[index])
    }
  }

  getCity() {
    this.weatherApi.fetchCity(this.cityId).subscribe(
      (res) => {
        this.weatherDetail = res;
        this.setLastDays()
      },

      (error) => {
        if (error.status === 404) {
          this.openSnackBar.showSnackBar('city not found ', 'warn', 2000);
        } else {
          this.openSnackBar.showSnackBar('city not found', 'warn', 2000);
        }
      }
    );
  }

}
