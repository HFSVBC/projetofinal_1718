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
  private baseURL = 'https://bcapi.hugocurado.info/';
  // private baseURL = 'https://cafcul.hugocurado.info/';
  // private baseURL = 'https://0a024cd4.ngrok.io/';

  // USER Routes
  loginPOST = this.baseURL + 'user/login';
  logoutPOST = this.baseURL + 'user/logout';
  isloggedinPOST = this.baseURL + 'user/isloggedin';
  // registerPOST = this.baseURL + 'user/register';
  existsPOST = this.baseURL + 'user/exists';
  retriveprofilePOST = this.baseURL + 'user/retriveprofile';

  // ADMIN Routes
  changeType = this.baseURL + 'user/changeType';

  getPessoasEspaco = this.baseURL + 'spaces/getPeopleNumerInSpace';
  getLugaresDisponiveis = this.baseURL + 'general/availableSpaces';
  getEdificios = this.baseURL + 'general/getFacultyBlocks';
  getPisosEdificio = this.baseURL + 'general/getBlockFloors';
  getSalasPisos = this.baseURL + 'general/getFloorsRooms';
  getAulas = this.baseURL + 'teacher/classes';
  getDatasAulas = this.baseURL + 'teacher/class/dates/';
  getAlunosNomesAulas = this.baseURL + 'teacher/class/students/';
  getAlunosAulas = this.baseURL + 'teacher/course/getStudentsAttendance';
  getAulasDeUmAluno = this.baseURL + 'teacher/individual/getStudentsAttendance';
  changetAulasDeUmAluno = this.baseURL + 'teacher/individual/changeStudentsAttendance';

  historico = this.baseURL + 'history/user';
  presencas = this.baseURL +  'presencas';

  getDATA(URL: string) { }

  loginPost(idToken): Observable<any> {
    const url = this.loginPOST;
    const data = new FormData();
    data.append('idToken', idToken);

    return this.http.post(url, data)
    .map(res => res,
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });
  }

  postData(url, data) {
    return this.http.post(url, data)
    .map(res => res,
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }});
    /*}).subscribe(res => {
      console.log('resposta', res);
    });*/
  }
}
