import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  x:any;
  i:any ;
  res:any;
  constructor(private route:ActivatedRoute, private router: Router) { }

  topicslist  = [
        {id:1, topic: "Political"}, 
        {id:2, topic:"Science"},
        {id:3, topic:"Histroy"},
        {id:4, topic: "Sports"},
        {id:5, topic: "Finance"}];
  // topicslist  = ["answers", "questions"];
  Questions = [
    "What is the best thing in life",
    "Who will win world cup",
    "Tell something intresting in Science.",
    "Who is the best football player in the world?"

  ]
  list = [
    {name:'Pradeep D S', profession: "Software Engineer", question: "What is the best thing in life?",latestans:"Love" },
    {name:'Samanvitha', profession: "Network Engineer", question: "Who will win world cup?",latestans:"India" },
    {name:'Mahesh', profession: "Student", question: "Tell something intresting in Science.", latestans:"Big bang theory" },
    {name:'Pradeep D S', profession: "Software Engineer", question: "Who is the best football player in the world?" , latestans:"Messi"},
  ];

  openedd: boolean;

  

  ngOnInit() {
   this.route.paramMap
   .subscribe(topics =>{
    //  console.log("1111111111111111111")
     console.log(this.router.url)
    console.log(topics);
    //  console.log("1111111111111111111")    
    this.x = topics.get("id") ;
    for (this.i = 0; this.i<= this.topicslist.length -1; this.i++){
      console.log(this.x)
      console.log(this.topicslist[this.i].id) 
      if (this.x == this.topicslist[this.i].id){
        // console.log("inside if")
        this.res = this.topicslist[this.i].topic;
        // console.log("22222222222222222")
        console.log(this.res)
        // console.log("22222222222222222")
      }
   }
   }
   )
};


  }

