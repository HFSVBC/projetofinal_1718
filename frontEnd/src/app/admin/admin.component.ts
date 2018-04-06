import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email;
  a;

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

    // this.a = this.apiconnector.postData(url, data);
    // console.log('cenas fixes', this.a);
    this.apiconnector.postData(url, data)
    .subscribe(res => {
      this.a = res['data'];
      console.log(res);
    });
  }

}
