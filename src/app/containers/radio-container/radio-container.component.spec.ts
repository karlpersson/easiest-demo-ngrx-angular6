import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioContainerComponent } from './radio-container.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

import { RadioComponent } from '../../components/radio/radio.component';
import { DuplicateRadioComponent } from '../../components/duplicate-radio/duplicate-radio.component';

describe('RadioContainerComponent', () => {
  let component: RadioContainerComponent;
  let fixture: ComponentFixture<RadioContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioContainerComponent,RadioComponent,DuplicateRadioComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
