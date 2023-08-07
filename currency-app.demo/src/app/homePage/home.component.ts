import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importujemy Router z modułu @angular/router

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  onCheckCurrencyButtonClick() {
    console.log('CheckCurrencyButton has been clicked.');
    this.router.navigate(['check-currency']);
  }

  onCheckHistoryButtonClick() {
    console.log('CheckHistoryButton has been clicked.');
    this.router.navigate(['check-history']);
  }
}
