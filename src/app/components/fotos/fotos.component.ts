import { Component, OnInit } from '@angular/core';
import { CargaimagenesService } from '../../services/cargaimagenes.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  imagenes: FirebaseListObservable<any[]>;

  constructor(_cargaimagenesService:CargaimagenesService) 
  {
  	this.imagenes=_cargaimagenesService.listaUltimasImagenes(10);
  }

  ngOnInit() {
  }

}
