import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase para inicializarlo
  constructor(
    private auth: AngularFireAuth,
    private servicioFirestore: AngularFirestore
  ) { }

  //Funcion paara tomar UId

  //Funcion paara el registro
  Registrar(email: string, password: string) {
    //
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  //Funcion paara el inicio de sesion 
  IniciarSesion(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //Funcion paara el cierre de sesion
  CerrarSesion() {
    return this.auth.signOut();
  }

  //funcion para tomar uid
  async obtenerUid() {
    //Nos va a generaruna promesa, y la constante la va a capturar
    const user = await this.auth.currentUser


    if (user == null) {
      return null;
    } else {
      return user.uid
    }
  }
  //funcion que buca un usuario en la coleccion de 'usuarios' cuyo correo electronico coincida con el valor proporcionado
  ObtenerUsuario(email: string) {
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }

}
