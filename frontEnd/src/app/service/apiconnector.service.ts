import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';

@Injectable()
export class APIConnectorService {

  constructor(private http: HttpClient) { }

  // private baseURL = 'http://localhost:8888/';
  private baseURL = 'https://cafcul.hugocurado.info/';
  // private baseURL = 'https://d61f73da.ngrok.io/';

  httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type', 'multipart/form-data'
    )
  };

  // USER Routes
  loginPOST = this.baseURL + 'user/login';
  logoutPOST = this.baseURL + 'user/logout';
  isloggedinPOST = this.baseURL + 'user/isloggedin';
  registerPOST = this.baseURL + 'user/register';
  existsPOST = this.baseURL + 'user/exists';
  retriveprofilePOST = this.baseURL + 'user/retriveprofile';

  historicoGET = '/historicoGET';
  presencasGET = '/presencasGET';

  getDATA(URL: string) { }

  loginPost(user_info): Observable<any> {
    const httpOptions = this.httpOptions;
    const url = this.loginPOST;
    const data = new FormData();
    data.append('name', user_info.displayName);
    data.append('avatar', user_info.photoURL);
    data.append('email', user_info.email);
    data.append('uid', user_info.uid);

    return this.http.post(url, data)
    .map(res => res['data'],
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    }
    );

  }

}
