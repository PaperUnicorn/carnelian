import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL = environment.backend + '/project';

  corsHeaders = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    })
  }
  constructor(
    private http : HttpClient
  ) { }

  getAllProjects() {
    return this.http.get(this.baseURL + "/all" ).toPromise().then().catch(e => {
      console.log("error in service");
    });
  }
}
