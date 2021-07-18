import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FIREBASE
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";

//SERVICIO A USAR DE FIREBASE
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';
import { ProductosComponent } from './componentes/productos/productos.component';

//FORMULARIOS
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProductoFormComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
