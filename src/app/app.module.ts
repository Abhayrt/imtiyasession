import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,LoginComponent, RegisterComponent, TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
