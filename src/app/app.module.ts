import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//rutas

import { APP_ROUTING } from './app.routes';

//Configuracion
import { firebaseConfig } from './config/firebase.config';
import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { AngularFireModule } from 'angularfire2';

import { CargaimagenesService } from './services/cargaimagenes.service';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NgDropFilesDirective
  ],
  imports: [
  HttpModule,
  FormsModule,
  APP_ROUTING,
  AngularFireModule.initializeApp(firebaseConfig),
  BrowserModule
  ],
  providers: [CargaimagenesService,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
