import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { HomeComponent } from './home.component';
// import { GuestComponent } from './guest.component';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { AddanswerComponent } from './addanswer/addanswer.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },

  { 
    path: 'dashboard', 
    component: DashboardComponent
  //   children: [  { 
  //   path: 'topics', 
  //   component: TopicsComponent
  // },
  //   {
  //   path: 'questions/:id',
  //   component: QuestionsComponent
  // },
  // ]
},
  { 
    path: 'topics', 
    component: TopicsComponent
  },
  {
    path: 'questions/:id',
    component: QuestionsComponent
  },
  {
    path: 'answers/:id',
    component: AnswersComponent
  },
  {
    path: 'addanswer/:id',
    component: AddanswerComponent
  },
    {
    path: 'addquestion/:id',
    component: AddquestionComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}