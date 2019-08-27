import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  Toaster, ToastType } from "ngx-toast-notifications";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {   MatNativeDateModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswersComponent } from './answers.component';
import { HeaderComponent } from '../header/header.component';
import { TopicsComponent } from '../topics/topics.component';


describe('AnswersComponent', () => {
  let component: AnswersComponent;
  let fixture: ComponentFixture<AnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersComponent, HeaderComponent,TopicsComponent ],
      imports: [
      FormsModule, 
      ReactiveFormsModule,     
      RouterModule,
    MatButtonModule, 
    MatCheckboxModule,
     MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatIconModule, 
    MatNativeDateModule, 
    MatListModule, MatToolbarModule, MatCardModule,

    RouterTestingModule.withRoutes([])
      ],
      providers :[{ provide: Toaster,  useClass: class {} },
      {provide: HttpClient, useClass : class{}}    
      ]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
