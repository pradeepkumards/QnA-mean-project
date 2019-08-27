import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {   MatNativeDateModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';

import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TopicsComponent } from './topics.component';
import { ActivatedRoute, Router } from '@angular/router';

describe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsComponent ],
      imports: [
      RouterModule,
      RouterTestingModule.withRoutes([]),
    MatButtonModule, 
    MatCheckboxModule,
     MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatIconModule, 
    MatNativeDateModule, 
    MatListModule, MatToolbarModule, MatCardModule,
      ],
      providers :[
      {provide: HttpClient, useClass : class{}}    
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
