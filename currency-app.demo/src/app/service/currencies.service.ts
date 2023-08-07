import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyQueryItem } from '../models/currency-query.model';
import {LogService} from "./logService";

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private requestsUrl: string = 'http://localhost:4200/currencies/requests'; // Zmień ten adres na odpowiedni endpoint Twojego backendu
  private getValueUrl: string =
    'http://localhost:4200/currencies/get-current-currency-value-command';

  constructor(private http: HttpClient) {}

  public downloadCurrencyQueryData(): Observable<CurrencyQueryItem[]> {
    return this.http.get<CurrencyQueryItem[]>(this.requestsUrl);
  }

  public getCurrentCurrency(
    userName: string | undefined,
    currencyCode: string | undefined
  ): Observable<{ value: number }> {
    const dane = {
      name: userName,
      currency: currencyCode,
    };
    //console.log(userName + currencyCode)
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    return this.http.post<any>(this.getValueUrl, dane, { headers });
  }
}
