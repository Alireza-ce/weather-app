import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWeatherComponent } from './components/add-weather/add-weather.component';
import { WeatherCardListComponent } from './components/weather-card-list/weather-card-list.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

const routes: Routes = [
  {
    path: '',
    component: AddWeatherComponent,
  },
  {
    path: 'weather',
    component: WeatherCardListComponent,
  },
  {
    path: 'weatherDetail/:id',
    component: WeatherDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRouting {}
