import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateTabsComponent } from './duplicate-tabs.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

describe('DuplicateTabsComponent', () => {
  let component: DuplicateTabsComponent;
  let fixture: ComponentFixture<DuplicateTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateTabsComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
