import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.get(this.authUrl, model).pipe(
      map((response: any) => {
        const user = response.find((user: any) => {
          return user.email === model.email && user.password === model.password;
        });
        console.log(user);
        if (user) {
          localStorage.setItem('token', user.token);
          return user;
        }
      }),
      catchError((error: any) => {
        console.log(error);
        return error;
      })
    );
  }
  register(model: any) {
    return this.http.post(this.authUrl, model).pipe(
      map((response: any) => {
        const user = response;
        console.log(user);
        if (user) {
          localStorage.setItem('token', user.token);
          return user;
        }
      }),
      catchError((error: any) => {
        console.log(error);
        return error;
      })
    );
  }
}
