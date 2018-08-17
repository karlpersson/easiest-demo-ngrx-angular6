import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsContainerComponent } from './tabs-container.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

import { TabsComponent } from '../../components/tabs/tabs.component';
import { DuplicateTabsComponent } from '../../components/duplicate-tabs/duplicate-tabs.component';

describe('TabsContainerComponent', () => {
  let component: TabsContainerComponent;
  let fixture: ComponentFixture<TabsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsContainerComponent,TabsComponent,DuplicateTabsComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
