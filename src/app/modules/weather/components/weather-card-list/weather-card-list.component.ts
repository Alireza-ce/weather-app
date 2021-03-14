import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherList } from '../../models/weather.model';

@Component({
  selector: 'app-weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.scss'],
})
export class WeatherCardListComponent implements OnInit {
  public weatherList: WeatherList[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setWeather();
  }

  setWeather() {
    if (JSON.parse(localStorage.getItem('weatherList'))) {
      this.weatherList = JSON.parse(localStorage.getItem('weatherList'));
    }
  }

  addCity() {
    this.router.navigate(['/']);
  }

  moreDetail(id: number) {
    this.router.navigate(['/weatherDetail', id]);
  }
}
