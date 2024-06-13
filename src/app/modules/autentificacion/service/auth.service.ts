import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase para inicializarlo
  constructor(public auth: AngularFireAuth) { }

  //Funcion paara tomar UId

  //Funcion paara el registro
  Registrar(email: string, password: string){
    //
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  //Funcion paara el inicio de sesion 
  IniciarSesion(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //Funcion paara el cierre de sesion
  CerrarSesion(){
    return this.auth.signOut();
  }

}