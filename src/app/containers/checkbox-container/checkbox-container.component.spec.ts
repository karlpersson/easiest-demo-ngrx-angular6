import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxContainerComponent } from './checkbox-container.component';


import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { DuplicateCheckboxComponent } from '../../components/duplicate-checkbox/duplicate-checkbox.component';


import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

describe('CheckboxContainerComponent', () => {
  let component: CheckboxContainerComponent;
  let fixture: ComponentFixture<CheckboxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxContainerComponent,CheckboxComponent,DuplicateCheckboxComponent ],
      imports: [FormsModule,StoreModule.forRoot(reducers)]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
