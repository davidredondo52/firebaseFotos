import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaimagenesService } from '../../services/cargaimagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html'
})
export class CargaComponent implements OnInit {

  estaSobreDropZone:boolean=false;
  permiteCargar:boolean=true;
  archivos:FileItem[]=[];
  constructor(private _cargaimagenesService:CargaimagenesService) { }

  ngOnInit() {
  }

  cargarImagenesFirebase(){
    this.permiteCargar=false;
    this._cargaimagenesService.cargar_imagenes_firebase(this.archivos);
  }

  limpiarArchivos(){
  	this.archivos=[];
  	this.permiteCargar=true;
  }

  archivoSobreDropZone(e:boolean){
  	console.log("archivoSobreDropZone=>"+e);
  	this.estaSobreDropZone=e;
  }

 
}
