import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AlertState } from './alert';


@Injectable()
export class AlertService {

  private loaderSubject = new Subject<AlertState>();

  alertState = this.loaderSubject.asObservable();

  constructor() { }

  show(msg) {
    this.loaderSubject.next(<AlertState>{show: true, msg: msg});
  }

  hide() {
      this.loaderSubject.next(<AlertState>{show: false});
  }

}
