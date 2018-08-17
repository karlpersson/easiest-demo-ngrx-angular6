import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TabsContainerComponent } from './containers/tabs-container/tabs-container.component';
import { TextfieldContainerComponent } from './containers/textfield-container/textfield-container.component';
import { SelectContainerComponent } from './containers/select-container/select-container.component';
import { CheckboxContainerComponent } from './containers/checkbox-container/checkbox-container.component';
import { RadioContainerComponent } from './containers/radio-container/radio-container.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DuplicateTabsComponent } from './components/duplicate-tabs/duplicate-tabs.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { DuplicateTextfieldComponent } from './components/duplicate-textfield/duplicate-textfield.component';
import { SelectComponent } from './components/select/select.component';
import { DuplicateSelectComponent } from './components/duplicate-select/duplicate-select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DuplicateCheckboxComponent } from './components/duplicate-checkbox/duplicate-checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { DuplicateRadioComponent } from './components/duplicate-radio/duplicate-radio.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app.routing.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule,FormsModule],
      declarations: [
        AppComponent,
        TabsContainerComponent,
        TextfieldContainerComponent,
        SelectContainerComponent,
        CheckboxContainerComponent,
        RadioContainerComponent,
        TabsComponent,
        DuplicateTabsComponent,
        TextfieldComponent,
        DuplicateTextfieldComponent,
        SelectComponent,
        DuplicateSelectComponent,
        CheckboxComponent,
        DuplicateCheckboxComponent,
        RadioComponent,
        DuplicateRadioComponent 
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));
});
