import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../service/currencies.service';
import { CurrencyQueryItem } from '../models/currency-query.model';
import {AlertService} from "../service/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './check-history.component.html',
  styleUrls: ['./check-history.component.css'],
})
export class CheckHistoryComponent implements OnInit {
  public listOfQueries: CurrencyQueryItem[] | undefined;
  public loading: boolean = true;

  constructor(private backendService: CurrenciesService, private alertService: AlertService) {}

  ngOnInit() {
    this.backendService.downloadCurrencyQueryData().subscribe({
      next: (data) => {
        this.listOfQueries = data;
        this.loading = false;
      },
      error: err => this.alertService.showErrorAlert(err.error)
    });
  }
}
