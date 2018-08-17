import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateCheckboxComponent } from './duplicate-checkbox.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

describe('DuplicateCheckboxComponent', () => {
  let component: DuplicateCheckboxComponent;
  let fixture: ComponentFixture<DuplicateCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateCheckboxComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
