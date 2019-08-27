import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { Questions } from '../services/testdata.service';
import { QnacallService } from '../services/qnacalls.service';

import { ActivatedRoute, Router } from '@angular/router';
import {  Toaster, ToastType } from "ngx-toast-notifications";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})

export class AnswersComponent implements OnInit {

  x:any;
  i:any ;
  res:any;
  // answers:any = [];
  constructor(private routerService: RouterService, private route:ActivatedRoute,
  private qnacall: QnacallService, private router: Router, private toaster: Toaster ) { }
  
  answers:any = [
    {id: 1, name:'Pradeep D S', profession: "Software Engineer", answers: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel","Travel","drawing"],latestans:"Love" },
    {id: 2, name:'Samanvitha', profession: "Network Engineer", answers: ["India", "England", "Newzland"],latestans:"India" },
    {id: 3, name:'Mahesh', profession: "Student", answers: ["Osmosis"], latestans:"Big bang theory" },
    {id: 4, name:'Pradeep D S', profession: "Software Engineer", answers: "Ronaldo" , latestans:"Messi"},
  ];
questionid:any =  "";
listans: any;
getAnswers(){
      this.questionid = this.router.url.split("/")[2];
      console.log("get topic id from url")
      console.log(this.router.url)
      console.log("get topic id from url")
      //  this.qnacall.getQuestionslist({ 'topicId': this.topic.value })
       this.qnacall.getAnswerslist({'questionid' : this.questionid })
                      .subscribe(data => {
                                          // console.log("1111111111111111111");
                                          console.log(data);
                                          this.listans = data ;
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
   this.route.paramMap
   .subscribe(params =>{
    console.log(params);
    // this.x = params.get("id") ;
    this.getAnswers();
})
};
showSuccess() {
    // ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark', 'light'];

    this.toaster.open({
      text: "Answer deleted successfully",
      caption: 'notification',
      type: "success",
    });
  }
  showerror() {
    // ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark', 'light'];

    this.toaster.open({
      text: "Your not the author to delete this answer",
      caption: 'notification',
      type: "danger",
    });
  }
deleteans(event){
       this.qnacall.deleteAnswer({'noteId' : event})
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



