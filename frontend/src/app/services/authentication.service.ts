import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
// import 'rxjs/operators/map';
import { map } from 'rxjs/operators';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   @Output() isLoggedIn: EventEmitter<Boolean> = new EventEmitter();

   users: Array<User>;
  //  api = 'http://localhost:8080/api/v1/users/';
   api = 'http://localhost:3000/api/v1/users/';
   header: HttpHeaders;
   usersSubject: BehaviorSubject<Array<User>>;

  constructor(private httpService: HttpClient ) {
    // this.header = new HttpHeaders({ 'Authorization': `Bearer ${this.getBearerToken()}`,'Content-Type' : 'application/json'});
    this.header = new HttpHeaders({ 'Authorization': `Bearer ${this.getBearerToken()}`, 
    'Content-Type' : 'application/json',  responseType: 'json' });
    this.usersSubject = new BehaviorSubject<Array<User>>([]);
  }

  authenticateUser(data) {
    console.log("12121212")
    console.log(data)
    // console.log(this.httpService.post(this.api + 'login', data))
    console.log("12121212")
    // return this.httpService.post(this.api + 'login',  data, { responseType: 'json'});
    return this.httpService.post(this.api + 'login',  data, {  responseType: 'json'});
  }

  registerUser(data) {
    return this.httpService.post(this.api + 'register', data);
  }

  setBearerToken(token) {
    sessionStorage.setItem('bearerToken', token);
  }

  getBearerToken(): string {
    return sessionStorage.getItem('bearerToken');
  }

  setUserId(userId) {
    sessionStorage.setItem('userId', userId);
  }

  getUserId(): string {
    return sessionStorage.getItem('userId');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.httpService.post(this.api + 'isAuthenticated', {}, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    }).pipe(map((res) => res['isAuthenticated'])).toPromise();
  }
  
  getUsersFromServer() {
    return this.httpService.get<User[]>(this.api , { headers: this.header }).subscribe((data) => {
      //console.log(data);
      this.users = data;
      this.usersSubject.next(this.users);
    },
    (error) => {
      console.log(error);
    });
  }

  getUsers():BehaviorSubject<Array<User>> {
    return this.usersSubject;
  }

}
