import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { AddWeatherComponent } from './components/add-weather/add-weather.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherCardListComponent } from './components/weather-card-list/weather-card-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherRouting } from './weather-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { WeatherService } from './services/weather.service';
import { SnackBar } from './services/snack-bar.service';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConvertTemp } from './pipes/convert-temp.pipe';

@NgModule({
  declarations: [
    NavComponent,
    WeatherCardComponent,
    AddWeatherComponent,
    NotFoundComponent,
    WeatherCardListComponent,
    ToolbarComponent,
    LoadingComponent,
    WeatherDetailsComponent,
    ConvertTemp,
  ],
  imports: [
    CommonModule,
    WeatherRouting,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [WeatherService,SnackBar],
})
export class WeatherModule {}
