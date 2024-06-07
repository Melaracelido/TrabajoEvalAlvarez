import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

//VINCULACIONES/IMPORTACIONES CON FIREBASE
import { enviroment } from 'src/enviroments/enviroments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage'


@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    CarruselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //componentes glbales
    SharedModule,
    //inicia firebase en nuestro proyecto
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    //autentificacion
    AngularFireAuthModule,
    //storeage -> BD de imagenes
    AngularFireStorageModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
