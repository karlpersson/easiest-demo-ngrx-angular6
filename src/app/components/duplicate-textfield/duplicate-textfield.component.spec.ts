import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateTextfieldComponent } from './duplicate-textfield.component';

import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';


describe('DuplicateTextfieldComponent', () => {
  let component: DuplicateTextfieldComponent;
  let fixture: ComponentFixture<DuplicateTextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateTextfieldComponent ],
      imports: [FormsModule,StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
