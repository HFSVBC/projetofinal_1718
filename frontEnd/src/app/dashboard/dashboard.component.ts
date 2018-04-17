import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { APIConnectorService } from '../service/apiconnector.service';
import { CookieService } from 'angular2-cookie/core';
import { Subject } from 'rxjs/Subject';
import { HistoricoComponent } from '../historico/historico.component';

class HistAc {
  sala: string;
  inicio: string;
  fim: string;
}
@Component({
  providers: [HistoricoComponent ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private user;
  user_info;
  user_name;
  user_uid;
  user_email;
  user_avatar;
  user_type;
  token;
  histAc: HistAc[] = [];
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};

  types = {
    '0' : 'student',
    '1' : 'teacher',
    '2' : 'staff member',
    '3' : 'security',
    '10' : 'admin'
  };

  constructor(public authService: AuthService, private router: Router, private _cookieService: CookieService,
    private apiconnector: APIConnectorService, private historico: HistoricoComponent) {
    this.user = authService.getUser();
    this.user_info = this.user.providerData[0];
  }

  ngOnInit() {
    console.log(this.user.providerData[0]);
    this.user_name = this.user_info.displayName;
    this.user_email = this.user_info.email;
    this.user_uid = this.user_info.uid;
    this.user_avatar = this.user_info.photoURL;
    this.user_type = this.types[this._cookieService.get('tipo')];

    this.createTable();

  }

  createTable() {
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 5,
      // paging: false,
      searching: false,
      lengthChange: false
    };

    const url = this.apiconnector.historico;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data)
      .subscribe(res => {
        console.log('res', res);
        this._cookieService.put('token', res['data']['token']);
        this.extractData(res['data']['accessHist']);
      });
  }

  private extractData(myDataArray) {
    this.histAc = myDataArray.data || {};
    this.dtTrigger.next();
  }

}
