import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldComponent } from './textfield.component';

import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

describe('TextfieldComponent', () => {
  let component: TextfieldComponent;
  let fixture: ComponentFixture<TextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldComponent ],
      imports: [FormsModule,StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
