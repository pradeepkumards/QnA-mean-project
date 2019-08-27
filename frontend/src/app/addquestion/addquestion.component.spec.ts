import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {
   MatNativeDateModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';
import {  Toaster, ToastType } from "ngx-toast-notifications";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AddquestionComponent } from './addquestion.component';
import { HeaderComponent } from '../header/header.component';


// import { AppModule } from '../app.module';
describe('AddquestionComponent', () => {
  let component: AddquestionComponent;
  let fixture: ComponentFixture<AddquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [      
        FormsModule, 
      MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatIconModule, 
    MatNativeDateModule, 
    MatListModule, MatToolbarModule,
        ReactiveFormsModule,
        RouterModule,
    RouterTestingModule.withRoutes([])
      ],
      declarations: [ AddquestionComponent, HeaderComponent ],
      providers : [{provide: FormGroup,  useClass: class {} },
      { provide: Toaster,  useClass: class {}},
      {provide: HttpClient, useClass : class{}}   
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
