import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class APIConnectorService {

  constructor(private http: HttpClient) { }

  // private baseURL = 'http://localhost:8888/';
  private baseURL = 'https://cafcul.hugocurado.info/';

  httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
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

  postData(URL: string, data: JSON) {
    this.http.post(URL, data).subscribe(
      res => {
        console.log(res);
      },
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
