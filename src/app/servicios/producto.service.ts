import { Injectable } from '@angular/core';

//INTERFACE
import { Producto } from "../modelos/producto";

//CONEXION A FIREBASE
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";

import { Observable } from "rxjs";


//PARA MAP
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //arreglo de productos
  productos: Observable <Producto[]>;

  productosColeccion: AngularFirestoreCollection<Producto>;

  productoDocumento: AngularFirestoreDocument<Producto>;


  constructor(public db: AngularFirestore) {
    //this.productos= this.db.collection('productos').valueChanges();
    this.productosColeccion= this.db.collection('productos');
    this.productos = this.productosColeccion.snapshotChanges().pipe(map(acciones => {
      return acciones.map(a => {
        const dato = a.payload.doc.data() as Producto;
        dato.id = a.payload.doc.id;
        console.log(dato.id);
        
        return dato;
      });
    }));
  }

  obtenerProductos(){
    
    return this.productos;
  }

  agregarProducto(producto :Producto){
    this.productosColeccion.add(producto);
  }


  borrarProducto(producto :Producto){
    this.productoDocumento= this.db.doc(`productos/${producto.id}`);
    this.productoDocumento.delete();
  }


  actualizarProducto(producto :Producto){
    this.productoDocumento = this.db.doc(`productos/${producto.id}`);
    this.productoDocumento.update(producto);
  }





}
