import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';


import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
      FormsModule, 
      ReactiveFormsModule,     
      RouterModule,
      RouterTestingModule.withRoutes([])
      ],
            providers :[
      {provide: HttpClient, useClass : class{}}    
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
