import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldContainerComponent } from './textfield-container.component';

import { TextfieldComponent } from '../../components/textfield/textfield.component';
import { DuplicateTextfieldComponent } from '../../components/duplicate-textfield/duplicate-textfield.component';


import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

describe('TextfieldContainerComponent', () => {
  let component: TextfieldContainerComponent;
  let fixture: ComponentFixture<TextfieldContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldContainerComponent,TextfieldComponent,DuplicateTextfieldComponent ],
      imports: [FormsModule,StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
