import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';

//SERVICIO
import { ProductoService } from "../../servicios/producto.service";



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos=[];

  estoyEditando: boolean =false;
  productoEditando: Producto;

  constructor( public productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.productoServicio.obtenerProductos().subscribe(productos=>{
      this.productos =productos;
      
    });
  }

  eliminarProductoF( producto: Producto) {
    this.productoServicio.borrarProducto(producto);
    window.alert("Se ha eliminado el producto");

  }

  //CAMBIO EL ESTADO A EDITANDO Y CARGO EL PRODUCTOEDITANDO
  editarProductoF (producto:Producto) {
    this.estoyEditando = !this.estoyEditando;
    this.productoEditando = producto;
  }

  //USA EL SERVICIO DE ACTUALIZAR PRODUCTO Y DESPUES DEJA TODO RESETEADO (PRODUCTOEDITANDO Y BOOLEANO)
  actualizarProductoF (){
    if (this.productoEditando.nombre !='' && this.productoEditando.descripcion != '' && this.productoEditando.precio != 0) {
      this.productoServicio.actualizarProducto(this.productoEditando);
      this.productoEditando ={precio:0};
      this.estoyEditando=false;  
    }
    else {
      window.alert("Todos los campos deben estar completos!");
      
    }
    
  }

}
