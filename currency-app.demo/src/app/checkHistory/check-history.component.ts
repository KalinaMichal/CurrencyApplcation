import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../service/currencies.service';
import { CurrencyQueryItem } from '../models/currency-query.model';
import {HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './check-history.component.html',
  styleUrls: ['./check-history.component.css'],
})
export class CheckHistoryComponent implements OnInit {
  public listOfQueries: CurrencyQueryItem[] | undefined;
  loading: boolean = true;

  constructor(private backendService: CurrenciesService) {}

  ngOnInit() {
    this.backendService.downloadCurrencyQueryData().subscribe((data) => {
      this.listOfQueries = data;
      this.loading = false;
    }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log('Resource not found:', error);
        }
        else if (error.status === 504) {
          console.log('Server might me offline:', error);
        }
        else {
          console.error('Unexpected error occurred:', error);
        }
        return throwError(() => new Error('Error occurred: ' + error));
      });

  }
}
