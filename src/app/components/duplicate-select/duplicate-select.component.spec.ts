import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateSelectComponent } from './duplicate-select.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

describe('DuplicateSelectComponent', () => {
  let component: DuplicateSelectComponent;
  let fixture: ComponentFixture<DuplicateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateSelectComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
