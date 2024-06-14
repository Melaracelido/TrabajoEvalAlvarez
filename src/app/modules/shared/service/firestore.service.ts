import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //Definimos una coleccion de usuarios privada
  //Va a ser una coeleccion de Firestore
  //Respetara la estructura de datos de la interfaz Usuario
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  
  constructor(private database: AngularFirestore) {
    this.usuariosCollection = this.database.collection<Usuario>('usuario');
   }

  agrgarUsuario(usuario: Usuario, id: string){
    return new Promise(async(resolve, reject)=> {
    try{
      usuario.uid = id;

      //constante resultado = coleccion de usuarios, encvia como documento el uid y setea
      //la info qie inmgresemos en el registro

      const resultado = await this.usuariosCollection.doc(id).set(usuario);
      resolve(resultado)
      //bloque catch encapsula una falla y la vuelve un error
    }catch(error){
      reject(error);
    }

  })
  }
}
