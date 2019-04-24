import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
