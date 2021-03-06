import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from '../shared/http-util.service';
import { HttpParams } from '@angular/common/http';
import { WeatherForecast } from './model/weatherForecast.model';
import { WeatherCurrent } from './model/weatherCurrent.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private httpUtilService: HttpUtilService) { }

  getForecastByCity(name: string, countryCode: string): Observable<WeatherForecast> {

  let params: HttpParams = new HttpParams();

  params = params.append('q', name + ',' + countryCode);
  params = params.append('appid', 'b9c5474ec9fafcef5210e25cff1996b0');
  params = params.append('units', 'metric');
  params = params.append('lang', 'pt');

   return this.httpUtilService.get('forecast', params);
  }

  getCurrentByCity(name: string, countryCode: string): Observable<WeatherCurrent> {
    let params: HttpParams = new HttpParams();

    params = params.append('q', name + ',' + countryCode);
    params = params.append('appid', 'b9c5474ec9fafcef5210e25cff1996b0');
    params = params.append('units', 'metric');
    params = params.append('lang', 'pt');

     return this.httpUtilService.get('weather', params);
  }

}
