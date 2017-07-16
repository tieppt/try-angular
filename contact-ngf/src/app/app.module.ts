import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CollapseGroupComponent } from './collapse-group/collapse-group.component';
import { CollapseComponent } from './collapse/collapse.component';
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';
import { SearchComponent } from './search/search.component';
import { SignupTformComponent } from './signup-tform/signup-tform.component';
import { ConfirmPasswordDirective } from './confirm-password.directive';
import { SignupRformComponent } from './signup-rform/signup-rform.component';
import { ForbiddenUsernameDirective } from './forbidden-username.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CollapseGroupComponent,
    CollapseComponent,
    TempConverterPipe,
    ContactFormComponent,
    ContactReactiveFormComponent,
    SearchComponent,
    SignupTformComponent,
    ConfirmPasswordDirective,
    SignupRformComponent,
    ForbiddenUsernameDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
