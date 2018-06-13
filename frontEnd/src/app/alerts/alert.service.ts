import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AlertState } from './alert';


@Injectable()
export class AlertService {

  private loaderSubject = new Subject<AlertState>();

  alertState = this.loaderSubject.asObservable();

  constructor() { }

  show(msg, type) {
    this.loaderSubject.next(<AlertState>{show: true, msg: msg, type: type});
  }

  hide() {
      this.loaderSubject.next(<AlertState>{show: false});
  }

}
