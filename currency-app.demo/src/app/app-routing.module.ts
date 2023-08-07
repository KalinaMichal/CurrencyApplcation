import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyCalculatorComponent } from './checkCurrency/check-currency.component';
import { CheckHistoryComponent } from './checkHistory/check-history.component';
import { HomeComponent } from './homePage/home.component';

const routes: Routes = [
  { path: 'check-currency', component: CurrencyCalculatorComponent },
  { path: 'check-history', component: CheckHistoryComponent },
  { path: '', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
