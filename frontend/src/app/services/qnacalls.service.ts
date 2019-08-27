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
export class QnacallService {
   @Output() isLoggedIn: EventEmitter<Boolean> = new EventEmitter();

   users: Array<User>;
  //  api = 'http://localhost:8080/api/v1/users/';
   api = 'http://localhost:3000/api/v1/';
   header: HttpHeaders;
   usersSubject: BehaviorSubject<Array<User>>;
   topicdata = "";

  constructor(private httpService: HttpClient ) {
    // this.header = new HttpHeaders({ 'Authorization': `Bearer ${this.getBearerToken()}`,'Content-Type' : 'application/json'});
    this.header = new HttpHeaders({ 'Authorization': `Bearer ${this.getBearerToken()}`, 
    'Content-Type' : 'application/json' });
    // this.header = new HttpHeaders().set( 'Authorization', `Bearer ${this.getBearerToken()}`);

    this.usersSubject = new BehaviorSubject<Array<User>>([]);
  }

  getQuestionslist(data) {
    console.log("12121212")
    console.log(data)
    // console.log(this.httpService.post(this.api + 'login', data))
    console.log(this.header)
    console.log("12121212")
    // return this.httpService.post(this.api + 'login',  data, { responseType: 'json'});
    // return this.httpService.get(this.api + 'groups/topics/' + this.topicdata,  {headers: this.header});
    return this.httpService.get(this.api + 'groups/topics/' + data.topicid,  {headers: this.header});
  }

  getAnswerslist(data) {
    console.log("12121212")
    console.log(data)
    // console.log(this.httpService.post(this.api + 'login', data))
    console.log(this.header)
    console.log("12121212")
    return this.httpService.get(this.api + 'notes/' + data.questionid,  {headers: this.header});
  }


addQuestionsToTopic(data){
  console.log("inside the addquestion")
      console.log(data[1]["topicid"])
    this.topicdata = data[1]["topicid"]
return this.httpService.post(this.api + 'groups/' + this.topicdata, data[0],  {headers: this.header});
}
deleteQuestion(data){
  console.log("inside deletequestion")
  console.log(data)
  return this.httpService.delete(this.api + 'groups/'+ data["groupId"] , {headers: this.header});
}
addAnswerToQuestion(data){
    console.log("inside the addanswer")
      console.log(data[1]["questionid"])
    this.topicdata = data[1]["questionid"]
    return this.httpService.post(this.api + 'notes/' + this.topicdata, data[0],  {headers: this.header});
}
deleteAnswer(data){
  console.log("inside deleteanswer")
  console.log(data)
  // return this.httpService.delete(this.api + 'notes/'+ data["noteId"] + "_"+data["username"] , {headers: this.header});
  return this.httpService.delete(this.api + 'notes/'+ data["noteId"] , {headers: this.header});
}
getUserDetails(data){
return this.httpService.get(this.api + 'users/' + data.userid,  {headers: this.header});
}

    getBearerToken(): string {
    return sessionStorage.getItem('bearerToken');
  }

}