import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { QnacallService } from '../services/qnacalls.service';

import { ActivatedRoute, Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import {  Toaster, ToastType } from "ngx-toast-notifications";
@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', Validators.required),  
   });
  x:any;
  i:any ;
  res:any;
  constructor(private route: RouterService, private toaster: Toaster, private actroute:ActivatedRoute,
  private qnacall: QnacallService, private routeactivate:ActivatedRoute, private router: Router) { }


  showSuccess() {
    // ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark', 'light'];

    this.toaster.open({
      text: "Question asked successfully",
      caption: 'notification',
      type: "success",
    });

  }

topicid = this.router.url.split("/")[2];
askedquestion = "";

addQuestions(qask){
      console.log("get topic id from url")
      console.log(this.router.url)
      console.log("get topic id from url")
      //  this.qnacall.getQuestionslist({ 'topicId': this.topic.value })
       this.qnacall.addQuestionsToTopic([ qask, {'topicid' : this.topicid }])
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

  ngOnInit() {
           this.routeactivate.paramMap
   .subscribe(topics =>{
     console.log('Inside ngOnInit testing')
     
   })
  }

  onSubmit(){
    this.askedquestion = JSON.stringify(this.form.value);
    // console.log("8888888888888888")
    console.log(this.askedquestion)
    // console.log("8888888888888888")
      // this.route.routeToQuestions();
      this.showSuccess();
      this.addQuestions(this.askedquestion);
      this.route.routeBack();
    }
  resetFunc(){
    console.log("Closing the window")
    this.route.routeBack();
  }
}
