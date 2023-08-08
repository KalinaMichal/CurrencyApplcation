import { Component } from '@angular/core';
import {AlertService} from "./service/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isAlertVisible = false;


  constructor(public alertService: AlertService) {}
}
