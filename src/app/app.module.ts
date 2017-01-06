import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ContactImageDetailComponent } from './presentation/contact-image-detail/contact-image-detail.component';
import { SwitchesComponent } from './presentation/switches/switches.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactImageDetailComponent,
    SwitchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
