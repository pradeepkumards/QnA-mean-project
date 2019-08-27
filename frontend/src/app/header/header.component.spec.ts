import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {   MatNativeDateModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [      RouterModule,
          MatButtonModule, 
    MatCheckboxModule,
     MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatIconModule, 
    MatNativeDateModule, 
    MatListModule, MatToolbarModule, MatCardModule,

    RouterTestingModule.withRoutes([])
]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
