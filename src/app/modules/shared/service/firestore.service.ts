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
}
