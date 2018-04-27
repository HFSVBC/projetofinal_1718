import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email;
  user;
  users;
  u_number;
  user_name;
  user_email;
  user_uid;
  user_type;
  user_avatar;

  types = {
    'student' : 0,
    'teacher' : 1,
    'staff member' : 2,
    'security' : 3,
    'admin' : 10
  };


  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('email', this.email);

    const url = this.apiconnector.retriveprofilePOST;
    const data = new FormData();
    data.append('userTokenId', this._cookieService.get('token'));
    data.append('userEmail', this.email);

    this.apiconnector.postData(url, data)
    .subscribe(res => {
      console.log('user', res);
      this.user = res['data']['user'];
      this._cookieService.put('token', res['data']['token']);
      this.user_name = this.user.name;
      this.user_email = this.user.email;
      this.user_uid = this.user.uid;
      this.user_type = this.user.user_type;
      this.user_avatar = this.user.avatar;
    });

    this.users = [{
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
    }
    ];
  }

  submitChange() {
    const url = this.apiconnector.changeType;
        const data = new FormData();
        data.append('userTokenId', this._cookieService.get('token'));
        data.append('uid', this.user_uid);
        data.append('type', this.types[this.user_type]);

        this.apiconnector.postData(url, data)
        .subscribe(res => {
          console.log('cenas', res);
          this._cookieService.put('token', res['data']['token']);
          alert('Trocou o id');
        });
  }

}