import { BrowserModule } from '@angular/platform-browser';
// import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {   MatNativeDateModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';
   import { FormsModule, ReactiveFormsModule } from '@angular/forms';
   import { RoutingModule } from './routing.module';
import { ToastNotificationsModule } from "ngx-toast-notifications";
// import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtopicComponent } from './addtopic/addtopic.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AddanswerComponent } from './addanswer/addanswer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
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
    HttpClientModule
    // ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
