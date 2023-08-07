import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyCalculatorModule } from './checkCurrency/check-currency.module';

import { HttpClientModule } from '@angular/common/http';
import {CheckHistoryModule} from "./checkHistory/check-history.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurrencyCalculatorModule,
    HttpClientModule,
    CommonModule,
    CheckHistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
