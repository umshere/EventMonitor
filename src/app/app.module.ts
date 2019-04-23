import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SubheaderLeftComponent } from './sub-header/subheader-left/subheader-left.component';
import { SubheaderRightComponent } from './sub-header/subheader-right/subheader-right.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    SubHeaderComponent,
    SubheaderLeftComponent,
    SubheaderRightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
