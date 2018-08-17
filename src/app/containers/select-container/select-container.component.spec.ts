import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContainerComponent } from './select-container.component';

import { SelectComponent } from '../../components/select/select.component';
import { DuplicateSelectComponent } from '../../components/duplicate-select/duplicate-select.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

describe('SelectContainerComponent', () => {
  let component: SelectContainerComponent;
  let fixture: ComponentFixture<SelectContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectContainerComponent,SelectComponent,DuplicateSelectComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
