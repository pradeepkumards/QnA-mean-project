import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing'
import { HeaderComponent } from './header/header.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

import { BrowserModule } from '@angular/platform-browser';
// import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {
   MatNativeDateModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';
   import { FormsModule, ReactiveFormsModule } from '@angular/forms';
   import { RoutingModule } from './routing.module';
import { ToastNotificationsModule } from "ngx-toast-notifications";
import { HttpClientModule } from '@angular/common/http';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtopicComponent } from './addtopic/addtopic.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AddanswerComponent } from './addanswer/addanswer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


// beforeEach(() => { TestBed.configureTestingModule({ declarations: [ 
//     AppComponent, 

//   ], 
//   imports: [ RouterTestingModule ] });

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
    AppComponent,
    TopicsComponent,
    QuestionsComponent,
    AnswersComponent,
    DashboardComponent,
    AddtopicComponent,
    AddquestionComponent,
    AddanswerComponent,
    LoginComponent,
    RegisterComponent,
  HeaderComponent 
      ],
      imports: [ 
        RouterTestingModule,
            BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatIconModule, 
    MatNativeDateModule, 
    MatListModule, MatToolbarModule,CommonModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    ToastNotificationsModule.forRoot(),
    HttpClientModule,
    RouterModule,
    // Router,
    // FormGroup, FormControl, Validators, FormBuilder
        ] ,
        providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
