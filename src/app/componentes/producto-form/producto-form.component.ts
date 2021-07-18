import { Component, OnInit } from '@angular/core';

//SERVICIO
import { ProductoService } from "../../servicios/producto.service";

//INTERFACE
import { Producto } from "../../modelos/producto";

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  constructor(public productoServicio:ProductoService) { }

  producto={precio:0} as Producto;
  

  ngOnInit(): void {
  }

  agregarProductoF(){
    if (this.producto.nombre !='' && this.producto.descripcion != '' && this.producto.precio != 0) {
      this.productoServicio.agregarProducto(this.producto);
      
      
      this.producto = {precio:0} as Producto;  
    }
    else {
      window.alert("Todos los campos deben estar completos!");
      
    }
  }

}
