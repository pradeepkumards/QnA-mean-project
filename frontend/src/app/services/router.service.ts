import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private location: Location) { }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
    

  } 
  routeToQuestions() {
    this.router.navigate(['questions']);
  }
  routeToTopics() {
    this.router.navigate(['topics']);
  }
  // routeToEditNoteView(noteId) {
  //   console.log("66666")
  //   this.router.navigate(['dashboard', {outlets: {noteEditOutlet: [ 'note', noteId, 'edit' ]}}]);
  // }

  routeBack() {
    this.location.back();
  }

  // routeToNoteView() {
  //   this.router.navigate(['dashboard/view/noteview']);
  // }

  // routeToListView() {
  //   console.log("backto list view")
  //   this.router.navigate(['dashboard/view/listview']);
  // }
}
