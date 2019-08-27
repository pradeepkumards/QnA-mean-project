import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TopicsComponent } from '../topics/topics.component';
import { QnacallService } from '../services/qnacalls.service';

import { ActivatedRoute, Router } from '@angular/router';
import {  Toaster, ToastType } from "ngx-toast-notifications";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./questions.component.css']
})
// export class QuestionsComponent implements OnInit {
  export class QuestionsComponent {

  constructor(private qnacall: QnacallService, private route:ActivatedRoute, private router: Router, private toaster: Toaster) {
   }
  display='none';
  message:any = "";
  Questions = [
    {id: "1", msg: "What is the best thing in life"},
    {id: "2", msg :"Who will win world cup"}
  ]
  listquestions: any = [];
  listuser: any = [];
topicid ="";
x:any;
getQuestions(){
      this.topicid = this.router.url.split("/")[2];
      console.log("get topic id from url")
      console.log(this.router.url)
      console.log("get topic id from url")
      //  this.qnacall.getQuestionslist({ 'topicId': this.topic.value })
      this.qnacall.getQuestionslist({'topicid' : this.topicid })
                      .subscribe(data => {
                                      this.listquestions = data ;
                                      // console.log("111111")
                                      console.log(this.listquestions)
                                      // console.log("111111111111111")
                                      }
                                        , err => {
                                          // console.log("44444444444444444")
                                          console.log(err.error)                                    
                                          // console.log("44444444444444444")
                                          }
                                  );

          
}

getUserinfo(uid){
         this.qnacall.getUserDetails({'userid' : uid })
                      .subscribe(userdata => {
                                        this.listuser = userdata;
                                        // console.log("aaaaaa")
                                        console.log(this.listuser)
                                        // console.log("aaaaaa")          
                                           }
                                        , err => {
                                          // console.log("44444444444444444")
                                          console.log(err.error)                                    
                                          // console.log("44444444444444444")
                                        }
                                        
       
                                  );
    setTimeout(function(){
    },1111000);
          }




 openModal(){
       this.display='block'; 
    }
onCloseHandled(){
       this.display='none'; 
      //  this.message.value = "";
    
    }
onsubmitHandled(){
  console.log("got submittion");
  // console.log(this.router.url)
  this.display='none'; 
  alert("Answer submitted")
}

  ngOnInit() {
       this.route.paramMap
   .subscribe(topics =>{
     console.log('Inside ngOnInit testing')
     this.getQuestions()
   })
  }
showSuccess() {
    // ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark', 'light'];

    this.toaster.open({
      text: "Question deleted successfully",
      caption: 'notification',
      type: "success",
    });
  }
  showerror() {
    // ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark', 'light'];

    this.toaster.open({
      text: "Your not the author to delete this question",
      caption: 'notification',
      type: "danger",
    });
  }
delQuestion(event){
       this.qnacall.deleteQuestion({'groupId' : event})
                      .subscribe(data => {
                                          // console.log("1111111111111111111");
                                          console.log(data);
                                          this.showSuccess()
                                          // this.listans = data ;
                                          // console.log("1111111111111111111");
                                         }
                                        , err => {
                                          // console.log("44444444444444444")
                                          console.log(err.error)  
                                          this.showerror()                                  
                                          // console.log("44444444444444444")
                                          }
                                  );
  }

}
