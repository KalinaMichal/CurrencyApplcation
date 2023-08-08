import {Injectable} from "@angular/core";

export enum AlertState {
  UNUSED = 'unused',
  SHOW = 'show',
  HIDE = 'hide'
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public message = '';
  public alertState = AlertState.UNUSED;
  private alertTimeout: any;

  public showErrorAlert(message: string): void {
    this.message = message;

    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
      this.alertState = AlertState.HIDE;
      setTimeout(() => {
        this.alertState = AlertState.SHOW;
      }, 100);
    } else {
      this.alertState = AlertState.SHOW;
    }

    this.alertTimeout = setTimeout(() => {
      this.alertState = AlertState.HIDE;
    }, 3000);
  }
}
