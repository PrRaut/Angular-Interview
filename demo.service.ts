import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  citiDetailsUrl = "http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=094aa776d64c50d5b9e9043edd4ffd00";
  constructor(private http: HttpClient) { }

  getCitiDetails(): Observable<any> {
    return this.http.get<any>(this.citiDetailsUrl)
  }

}
