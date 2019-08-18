import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public persona: Persona;

  constructor(private http: HttpClient) {
    // this.http
    // .get('https://jsonplaceholder.typicode.com/users')
    // .subscribe(
    //   console.log, // Next
    //   console.log, // error
    //   console.log) // complete
  }

  public getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
