import { Component } from '@angular/core';
import { CurrenciesService } from '../service/currencies.service';
import {catchError, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-check-currency',
  templateUrl: './check-currency.component.html',
  styleUrls: ['./check-currency.component.css'],
})
export class CurrencyCalculatorComponent {
  public currencyCode: string | undefined;
  public userName: string | undefined;
  public rate: number | undefined;
  public value: number | undefined;
  public errorMessage: string | undefined;

  constructor(private currenciesService: CurrenciesService) {}

  calculateCurrency() {
    this.errorMessage = undefined;
    this.currenciesService
      .getCurrentCurrency(this.userName, this.currencyCode)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.log('Resource not found:', error);
            this.errorMessage='The currency code is not correct.';
          }
          else if (error.status === 504) {
            console.log('Some of the fields might be empty or the server is shot down:', error);
            this.errorMessage='The server is currently unavailable. Please try again later.';
          }  else {
            console.error('An error occurred:', error);
            this.errorMessage='Unexpected error occurred. Please try again later.';
          }
          return  throwError(() => new Error('Error occurred: ' + error));
        })
      )
      .subscribe((result) => {
        this.rate = result.value;
      });
  }

  get isSubmitDisabled(): boolean {
    return !this.currencyCode || !this.userName;
  }
}
