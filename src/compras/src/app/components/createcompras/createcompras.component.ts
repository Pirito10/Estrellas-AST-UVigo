import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { Compras } from 'src/app/models/compras';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
selector: 'app-createcompras',
templateUrl: './createcompras.component.html',
styleUrls: ['./createcompras.component.css']
})

export class CreatecomprasComponent implements OnInit {
comprasForm: FormGroup;
title = 'Registrar Compra';
cantidad_2='';
nombre_articulo_2='';
id_articulo_2='';
precio_2='';
id_cliente_2='';
comprador_2='';
direccion_2='';
id: string | null;
rol: string='';
crear: boolean =false;


constructor(private fb: FormBuilder, private router:Router, private _compraService: ComprasService, private aRouter: ActivatedRoute){
this.comprasForm = this.fb.group({
cantidad: ['', Validators.required],
comprador: ['', Validators.required],
direccion: ['', Validators.required],
id_cliente: ['', Validators.required],

})
this.id = this.aRouter.snapshot.paramMap.get('id');

}

ngOnInit(): void {
    //this.Edit();
    this.showAlert_c()
}

addcompra(){
const COMPRAS: Compras = {
cantidad: this.comprasForm.get('cantidad')?.value,
comprador: this.comprasForm.get('comprador')?.value,
direccion: this.comprasForm.get('direccion')?.value,
id_articulo: this.id?this.id:'0',
id_cliente: this.comprasForm.get('id_cliente')?.value,

}
console.log(COMPRAS.id_cliente)
this._compraService.getRol(COMPRAS.id_cliente).subscribe(
    data => {
    console.log(data);
    if(data!="cliente"){
      alert("El  introducido no es válido. Compra cancelada");
      this.router.navigateByUrl('/admin');
    }else{
    console.log("entré en crear");
    console.log(COMPRAS);
    window.confirm('¿Seguro que quiere registar esta estrellas?');
    this._compraService.saveCompras(COMPRAS).subscribe(data => {
        alert("Su compra se ha realizado correctamente con ID "+data._id);
        this.router.navigate(['/admin'])
        }, error => {
        console.log(error);
        this.comprasForm.reset();
        })
    }
    }, error => {
    console.log(error);
    })
      
}


/*Edit() {
    console.log(this.id);
    if (this.id !== null) {
    this.title = 'Modificar compra';
    this._compraService.getACompra(this.id).subscribe(data => {
    console.log(data);
    this.cantidad_2=data.cantidad;
    this.id_articulo_2=data.id_articulo;
    this.id_cliente_2=data.id_cliente;
    this.comprador_2=data.comprador;
    this.direccion_2=data.direccion;

    this.comprasForm.setValue({
    cantidad: data.cantidad?data.cantidad:0,
    id_articulo: data.id_articulo?data.id_articulo:'0',
    id_cliente: data.id_cliente?data.id_cliente:'0',
    comprador: data.comprador?data.comprador:'desconocido',
    direccion: data.direccion?data.direccion:'desconocida',
    })
    })
    }
    }*/

    showAlert_c() {
        const id = prompt('Ingresa el ID :');
        if (id) {
          this.comprobarRol_c(id);
        }
      }
      
      comprobarRol_c(id: string) {
       
        this._compraService.getRol(id).subscribe(
          data => {
          console.log(data);
          this.rol=data;
          if(data!="cliente"){
            this.crear=false;
            alert("No tiene suficientes permisos");
            this.router.navigateByUrl('/admin');
          }else{
            this.crear=true;
          }
          }, error => {
          this.crear=false;
          alert("No tiene suficientes permisos");
          this.router.navigateByUrl('/admin');
          console.log(error);
          })
      }
}
    

