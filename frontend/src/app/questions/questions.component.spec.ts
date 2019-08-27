import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {   MatNativeDateModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from '../header/header.component';
import { TopicsComponent } from '../topics/topics.component';
import { QuestionsComponent } from './questions.component';

// import { AppModule } from '../app.module';
describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsComponent, HeaderComponent, TopicsComponent ],
      imports:[
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
            providers :[
      {provide: HttpClient, useClass : class{}}    
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
