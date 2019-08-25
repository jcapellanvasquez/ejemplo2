import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl: string = environment.urlApi;

  public persona: Persona;
  private url: string = "welcome/get_users"
  //private url: string = "http://192.168.200.184:44399/api/users"

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

  public getMyUsers(): Observable<any> {
    let header: HttpHeaders = new HttpHeaders().set(
      'Access-Control-Allow-Origin', '*',
    );

    return this.http.get(this.baseUrl+this.url)
  }

  public setUser(nombre: string, apellido: string, usuario, correo: string) {
    let params = new FormData();

    params.append("user", JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      usuario:usuario
    }))

    this.http.post(this.baseUrl +"welcome/set_user", params).subscribe(console.log)
  }
}
