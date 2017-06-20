import { Directive,EventEmitter,ElementRef,HostListener,Input,Output } from '@angular/core';
import { FileItem } from '../models/file-item';
@Directive({
  selector: '[NgDropFiles]'
})
export class NgDropFilesDirective {

  @Input () archivos:FileItem[]=[];
  @Output () archivoSobre :EventEmitter<any>=new EventEmitter();

  constructor(public elemento:ElementRef)
   {

   }

   @HostListener('dragenter',['$event'])
   public onDragEnter(event:any){
   	console.log("onDragEnter=>"+event);
   		this.archivoSobre.emit(true);
   }

    @HostListener('dragleave',['$event'])
   public onDragLeave(event:any){
   	    console.log("onDragLeave=>"+event);
   		this.archivoSobre.emit(false);
   }

   @HostListener('dragover',['$event'])
   public onDragOver(event:any){

       console.log("onDragOver=>"+event);

       let transferencia= this._getTransferencia(event);

       transferencia.dropEffect="copy"

       this._preveniyDetener(event);

   	
   	 this.archivoSobre.emit(true);
   }

   @HostListener('drop',['$event'])
   public onDrop(event:any)
   {
   	 
      let transferencia= this._getTransferencia(event);
      if(!transferencia)
      {
         return;
      }
       console.log("antes agregar archivos=>"+transferencia.files);

      this.agregarArchivos(transferencia.files);

      this.archivoSobre.emit(false);
      
      this._preveniyDetener(event);
      
      
   }

   private _getTransferencia(event:any)
   {
      return event.dataTransfer ? event.dataTransfer:event.originalEvent.dataTransfer;
   }
   private _preveniyDetener(event:any)
   {
   	event.preventDefault();
   	event.stopPropagation();
   }

   private _archivoYaFueDropeado(nombreArchivo:string):boolean
   {
   	for(let i in this.archivos)
   	{
   		let arch=this.archivos[i];
   		if(arch.archivo.name==nombreArchivo)
   		{
   			console.log("Archivo ya existe en la lista",nombreArchivo);
   			return true;
   		}
   	}
   	return false;
   }

   private _esImagen(tipoArchivo:string):boolean
   {
   	 return (tipoArchivo=="" || tipoArchivo==undefined)?false:tipoArchivo.startsWith("image")
   }

   private _archivoYaPuedeSerCargado(archivo:File):boolean
   {
         
   		if(!this._archivoYaFueDropeado(archivo.name) && this._esImagen(archivo.type))
   		{
   			return true;
   		}

   		return false;
   }

   private agregarArchivos(archivos:FileList)
   {
      

      for (let propiedad in Object.getOwnPropertyNames(archivos))
      {
         let archTemporal=archivos[propiedad];

        

         if(this._archivoYaPuedeSerCargado(archTemporal))
         {
            let nuevoArchivo=new FileItem(archTemporal) ;

            this.archivos.push(nuevoArchivo);
         }
      }

      console.log(this.archivos);
   }
}

