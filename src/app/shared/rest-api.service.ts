import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import { Phones } from './phones';
import { IPhone } from '../shared/i-phone';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // defina Api
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // crud method

  // Option http

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch phones list
  getPhones(): Observable<IPhone> {
    return this.http.get<IPhone>(this.apiUrl + '/phone')
      .pipe(
        // retry ponawia probe subskybcji danych
        retry(2),
        // catch Error obsluguje bledy zglaszane przez obserwable
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch phone
  getPhone(id): Observable<IPhone> {
    return this.http.get<IPhone>(this.apiUrl + '/phone/' + id)
      .pipe(
        // retry ponawia probe subskybcji danych
        retry(1),
        // catch Error obsluguje bledy zglaszane przez obserwable
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create phones
  createPhone(phone): Observable<IPhone> {
    return this.http.post<IPhone>(this.apiUrl + '/phone', JSON.stringify(phone), this.HttpOptions)
      .pipe(
        // retry ponawia probe subskybcji danych
        retry(1),
        // catch Error obsluguje bledy zglaszane przez obserwable
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update phone
  updatePhone(id, phone): Observable<IPhone> {
    return this.http.put<IPhone>(this.apiUrl + '/phone/' + id, JSON.stringify(phone), this.HttpOptions)
      .pipe(
        // retry ponawia probe subskybcji danych
        retry(1),
        // catch Error obsluguje bledy zglaszane przez obserwable
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete phone
  deletePhone(id): Observable<IPhone> {
    return this.http.delete<IPhone>(this.apiUrl + '/phone/' + id, this.HttpOptions)
      .pipe(
        // retry ponawia probe subskybcji danych
        retry(1),
        // catch Error obsluguje bledy zglaszane przez obserwable
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Pobierz błąd po stronie klienta
      errorMessage = error.error.message;
    } else {
      // Pobierz błąd po stronie serwera
      errorMessage = `error code ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
