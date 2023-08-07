import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyCalculatorComponent } from './check-currency.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CurrencyCalculatorComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
})
export class CurrencyCalculatorModule {}
