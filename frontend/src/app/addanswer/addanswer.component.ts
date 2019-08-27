import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

import { QnacallService } from '../services/qnacalls.service';
import { RouterService } from '../services/router.service';
import {  Toaster, ToastType } from "ngx-toast-notifications";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addanswer',
  templateUrl: './addanswer.component.html',
  styleUrls: ['./addanswer.component.css']
})
export class AddanswerComponent implements OnInit {
    form = new FormGroup({
    title: new FormControl('', Validators.required),  
   });

  x:any;
  i:any ;
  res:any;
  Questions = [
    {id: "1", msg: "What is the best thing in life"},
    {id: "2", msg :"Who will win world cup"}
  ]

  constructor(private route: RouterService, private toaster: Toaster, private actroute:ActivatedRoute,
  private qnacall: QnacallService, private routeactivate:ActivatedRoute, private router: Router) {
   }

anstoadd:any ;
questionid = this.router.url.split("/")[2];
addAnswers(aadd){
      console.log("get topic id from url")
      console.log(this.router.url)
      console.log("get topic id from url")
      //  this.qnacall.getQuestionslist({ 'topicId': this.topic.value })
       this.qnacall.addAnswerToQuestion([ aadd, {'questionid' : this.questionid }])
                      .subscribe(data => {
                                          // console.log("1111111111111111111");
                                          console.log(data);
                                          // console.log("1111111111111111111");
                                         }
                                  , err => {
                                    // console.log("44444444444444444")
                                    console.log(err.error)                                    
                                    // console.log("44444444444444444")
                                    }
                                  );
}



  showSuccess() {
    // ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark', 'light'];

    this.toaster.open({
      text: "Answer submitted successfully",
      caption: 'notification',
      type: "success",
    });
    this.toaster.open({
      text: "Click on question to view your answer",
      caption: 'notification',
      type: "info",
    });
  }

  onSubmit(){
      this.anstoadd = JSON.stringify(this.form.value);
      // this.route.routeToQuestions();
      console.log("131313113131")
      console.log(this.anstoadd)
      console.log("131313113131")
      this.addAnswers(this.anstoadd);
      this.showSuccess();
      this.route.routeBack();
    }

  resetFunc(){
    console.log("Closing the window")
    this.route.routeBack();
  }

   get title(){
      return this.form.get('title')
    }

  ngOnInit() {
       this.actroute.paramMap
   .subscribe(params =>{
    console.log(params);
    this.x = params.get("id") ;
    console.log("11111111111")
    console.log(this.x)
    for (this.i = 0; this.i<= this.Questions.length -1; this.i++){
      console.log(this.x)
      console.log(this.Questions[this.i].id) 
      if (this.x == this.Questions[this.i].id){
        console.log("inside if")
        this.res = this.Questions[this.i].msg;
        // console.log("22222222222222222")
        console.log(this.res)
        // console.log("22222222222222222")
       }
   }


})
  }

}
