import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateRadioComponent } from './duplicate-radio.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

describe('DuplicateRadioComponent', () => {
  let component: DuplicateRadioComponent;
  let fixture: ComponentFixture<DuplicateRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateRadioComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
