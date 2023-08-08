import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyQueryItem } from '../models/currency-query.model';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private baseUrl = 'api/currencies';

  constructor(private http: HttpClient) {}

  public downloadCurrencyQueryData(): Observable<CurrencyQueryItem[]> {
    return this.http.get<CurrencyQueryItem[]>(`${this.baseUrl}/requests`);
  }

  public getCurrentCurrency(
    userName: string | undefined,
    currencyCode: string | undefined
  ): Observable<{ value: number }> {
    const data = {
      name: userName,
      currency: currencyCode,
    };
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    return this.http.post<any>(`${this.baseUrl}/get-current-currency-value-command`, data, { headers });
  }
}
