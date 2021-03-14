import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {urls,apiKey} from './../../../helper/url';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public baseUrl: string = urls.baseUrl;
  public apiKey: string = apiKey;
  constructor(private http: HttpClient) {}

  addCity(cityName: string): Observable<any> {
    let url = `${this.baseUrl}weather?q=${cityName}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  fetchCity(id: number): Observable<any> {
    let url = `${this.baseUrl}forecast?id=${id}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

}
