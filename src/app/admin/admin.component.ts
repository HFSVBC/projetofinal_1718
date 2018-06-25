import { Component, OnInit } from '@angular/core';
import { APIConnectorService, options } from '../service/apiconnector.service';
import { LoaderService } from '../loader/loader.service';
import { EmailValidator } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { AlertService } from '../alerts/alert.service';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email; user;
  u_number; user_name;
  user_email; user_active;
  user_lastLogin;
  user_uid; user_id;
  user_type; user_avatar;
  loader = true;
  userNotFound = false;

  types = {
    'student' : 0,
    'teacher' : 1,
    'staff member' : 2,
    'security' : 3,
    'admin' : 10
  };
  users = [{
    'id': 0,
    'type': 'student'
  }, {
    'id': 1,
    'type': 'teacher'
  },
  {
    'id': 2,
    'type': 'staff member'
  },
  {
    'id': 3,
    'type': 'security'
  }, {
    'id': 10,
    'type': 'admin'
  }];


  constructor(public authService: AuthService, private _cookieService: CookieService,
     private apiconnector: APIConnectorService, private loaderService: LoaderService,
    private respVal: ResponseStatusValidatorService, private alertService: AlertService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loaderService.show();

    const url = this.apiconnector.retriveprofilePOST;
    const data = new FormData();
    data.append('userTokenId', this._cookieService.get('token'));
    data.append('userEmail', this.email);

    this.apiconnector.postData(url, data)
    .subscribe(res => {

      this.respVal.validate(res);

      this._cookieService.put('token', res['data']['token'], options);
      console.log('user', res);

      this.user = res['data']['user'];

      if (this.user.found === 1) {
        this.user_name = this.user.name;
        this.user_email = this.user.email;
        this.user_uid = this.user.uid;
        this.user_id = this.user.id;
        this.user_type = this.user.user_type;
        this.user_avatar = this.user.avatar;
        this.user_active = this.user.active;
        this.user_lastLogin = this.user.last_login;
      } else {
        this.userNotFound = true;
      }

      this.loaderService.hide();

    });
  }

  emailChanged() {
    if (this.email.length > 0 && this.email.search('@') > 0) {
      this.loader = false;
    } else {
      this.loader = true;
    }
  }

  submitChange() {
    const url = this.apiconnector.changeType;
    const data = new FormData();
    data.append('userTokenId', this._cookieService.get('token'));
    data.append('uid', this.user_uid);
    data.append('type', this.types[this.user_type]);

    this.apiconnector.postData(url, data)
    .subscribe(res => {
      this.respVal.validate(res);

      this.alertService.show('Tipo de utilizador trocado', 'success');

      console.log('cenas', res);
      this._cookieService.put('token', res['data']['token'], options);
    });
  }

}
