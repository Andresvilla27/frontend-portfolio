import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'https://localhost:3000/api'; //segun corresponda la url
  token: any;
  
  constructor(private http:HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', {email: email,password: password})
    .subscribe((resp:any)=> {
      //Redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      //Guardamos el token en localStorage
      localStorage.setItem('auth_token', resp.token);
    })
  };
  //Para cerra sesion eliminamos el token del localstorage
logout () {
  localStorage.removeItem('token');
}
//Un servicio para verificar si existe la sesion
public get logIn(): boolean {
  return (localStorage.getItem('token')!==null);
}

}







