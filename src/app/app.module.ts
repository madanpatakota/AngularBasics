import { Component, Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Customer } from './app.customer';
import { FormsModule } from '@angular/forms'

// Component

@NgModule({
  declarations: [
    AppComponent,
    Customer
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
