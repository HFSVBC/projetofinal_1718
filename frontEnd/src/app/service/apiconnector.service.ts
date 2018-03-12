import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ApiconnectorService {

  constructor(private http: HttpClient) { }

  clientURL = '/ola';

  postData(baseURL: string, data: JSON) {}

}
