import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  topicslist  = ["Politics", "Science", "Histroy", "Language"];
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
  }

}
