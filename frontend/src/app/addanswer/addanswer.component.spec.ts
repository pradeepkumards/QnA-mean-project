import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {
   MatNativeDateModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { AddanswerComponent } from './addanswer.component';
import { HeaderComponent } from '../header/header.component';
import {  Toaster, ToastType } from "ngx-toast-notifications";
import { HttpClient, HttpHeaders } from '@angular/common/http';





describe('AddanswerComponent', () => {
  let component: AddanswerComponent;
  let fixture: ComponentFixture<AddanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddanswerComponent, HeaderComponent ],
      imports: [
      FormsModule, 
      ReactiveFormsModule,     
      RouterModule,
     MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatIconModule, 
    MatNativeDateModule, 
    MatListModule, MatToolbarModule,CommonModule,
    RouterTestingModule.withRoutes([])
      ],
      providers :[{ provide: Toaster,  useClass: class {} },
      {provide: HttpClient, useClass : class{}}    
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
