import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FileItem } from '../models/file-item';
import * as firebase from "firebase";

@Injectable()
export class CargaimagenesService {

  private CARPETA_IMAGENES:string="img";

  constructor(public af:AngularFireDatabase) 
  {
  }

  listaUltimasImagenes(numeroImagenes:number):FirebaseListObservable<any[]>
  {
  	return this.af.list(`${this.CARPETA_IMAGENES}`,{
  		query:{
  			limitToLast:numeroImagenes
  		}
  	})
  }

  cargar_imagenes_firebase(archivos:FileItem[])
  {
    let storageRef=firebase.storage().ref();
    for(let item of archivos)
    {
      item.estasubiendo=true;
      let upLoadTask:firebase.storage.UploadTask=
                     storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);

          upLoadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot)=>item.progreso=(snapshot.bytesTransferred / snapshot.totalBytes)*100,
                (error)=>console.error("Error al subir"+error),
                ()=>{
                  item.url=upLoadTask.snapshot.downloadURL;
                  item.estasubiendo=false;
                  this.guardarImagen({nombre:item.nombreArchivo,url:item.url})
                }
                );
    }
  }

  private guardarImagen(imagen:any)
  {
  	this.af.list(`${this.CARPETA_IMAGENES}`).push(imagen);
  }
}
