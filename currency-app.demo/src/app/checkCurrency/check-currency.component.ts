import { Component } from '@angular/core';
import { CurrenciesService } from '../service/currencies.service';
import {AlertService} from "../service/alert.service";

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

  constructor(private currenciesService: CurrenciesService, private alertService: AlertService) {}

  calculateCurrency() {
    this.errorMessage = undefined;
    this.currenciesService
      .getCurrentCurrency(this.userName, this.currencyCode)
      .subscribe({
        next: result => this.rate = result.value,
        error: err => this.alertService.showErrorAlert(err.error)
      });
  }

}
