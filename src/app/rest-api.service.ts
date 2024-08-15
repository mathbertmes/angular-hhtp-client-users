import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};
  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/users');
  }

  createUser(user: any): Observable<User> {
    return this.http
        .post<User>(
            this.apiURL + '/users',
            JSON.stringify(user),
            this.httpOptions
        );
  }
  getUser(id: any): Observable<User> {
    return this.http
        .get<User>(this.apiURL + '/users/' + id);
}
deleteUser(id: any) {
  return this.http
      .delete<User>(
          this.apiURL + '/users/' + id,
          this.httpOptions
      );
}
updateUser(id: any, user: any): Observable<User> {
  return this.http
      .put<User>(
          this.apiURL + '/users/' + id,
          JSON.stringify(user),
          this.httpOptions
      );
}
  constructor(private http: HttpClient) {}
}
