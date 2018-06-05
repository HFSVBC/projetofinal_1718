import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from './alert.service';
import { AlertState } from './alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit, OnDestroy {

  show = false;
  msg;
  type;

  private subscription: Subscription;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.alertState
    .subscribe((state: AlertState) => {
        this.show = state.show;
        this.msg = state.msg;
        this.type = state.type;
    });
  }

  ngOnDestroy() {
    this.show = false;
    this.subscription.unsubscribe();
  }

  showFalse() {
    this.show = false;
  }
}
