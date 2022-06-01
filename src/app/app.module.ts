import { Component, Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Customer } from './customer/app.customer';
import { FormsModule } from '@angular/forms';
import { CustomerCoreComponent } from './customer-core/customer-core.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component'

// Component

@NgModule({
  declarations: [
    AppComponent,
    Customer,
    CustomerCoreComponent,
    OrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
