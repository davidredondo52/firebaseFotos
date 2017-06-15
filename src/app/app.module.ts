import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//rutas

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent
  ],
  imports: [
  HttpModule,
  FormsModule,
  APP_ROUTING,
   BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
