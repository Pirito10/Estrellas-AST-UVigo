import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { Estrellas } from 'src/app/models/estrellas';
import { EstrellasService } from 'src/app/services/estrellas.service';

@Component({
selector: 'app-createestrellas',
templateUrl: './createestrellas.component.html',
styleUrls: ['./createestrellas.component.css']
})

export class CreateestrellasComponent implements OnInit {
estrellasForm: FormGroup;
title = 'Registrar Estrella';
tipo_espectral_2='';
nombre_2='';
cantidad_2='';
edad_2='';
constelacion_2='';
luminosidad_2='';
masa_2='';
radio_2='';
distancia_2='';
precio_2='';
id: string | null;
rol: string='';
crear: boolean =false;

constructor(private fb: FormBuilder, private router:Router, private _estrellaService: EstrellasService, private aRouter: ActivatedRoute){
this.estrellasForm = this.fb.group({
nombre: ['', Validators.required],
tipo_espectral: [''],
luminosidad: [''],
distancia: [''],
masa: [''],
radio: [''],
edad: [''],
constelacion: [''],
precio: ['', Validators.required],
cantidad: ['', Validators.required],

})
this.id = this.aRouter.snapshot.paramMap.get('id');
}

ngOnInit(): void {
    this.showAlert_a();
        this.Edit();
}

addestrellas(){
const ESTRELLAS: Estrellas = {
nombre: this.estrellasForm.get('nombre')?.value,
masa: this.estrellasForm.get('masa')?.value,
distancia: this.estrellasForm.get('distancia')?.value,
radio: this.estrellasForm.get('radio')?.value,
edad: this.estrellasForm.get('edad')?.value,
constelacion: this.estrellasForm.get('constelacion')?.value,
luminosidad: this.estrellasForm.get('luminosidad')?.value,
tipo_espectral: this.estrellasForm.get('tipo_espectral')?.value,
precio: this.estrellasForm.get('precio')?.value,
cantidad: this.estrellasForm.get('cantidad')?.value,
}
//Verificar existe el producto
if (this.id !== null) {
    //existe el producto se edita
    this._estrellaService.editEstrella(this.id, ESTRELLAS).subscribe(data => {
    this.router.navigate(['/admin']);
    }, error => {
    console.log(error);
    this.estrellasForm.reset();
})
} else {
    //no existe el producto se crea
    console.log(ESTRELLAS);
    window.confirm('¿Seguro que quiere registar esta estrellas?');
    this._estrellaService.saveEstrellas(ESTRELLAS).subscribe(data => {
        this.router.navigate(['/admin'])
        }, error => {
        console.log(error);
        this.estrellasForm.reset();
        })
        
    }

}
Edit() {
    console.log(this.id);
    
    if (this.id !== null) {
    this.title = 'Modificar Estrella';
    this._estrellaService.getAEstrella(this.id).subscribe(data => {
    console.log(data);
    this.nombre_2=data.nombre;
    this.tipo_espectral_2=data.tipo_espectral;
    //this.tipo_espectral_2='Tipo espectral: '+data.tipo_espectral;
    this.luminosidad_2=data.luminosidad;
    this.masa_2=data.masa;
    this.radio_2=data.radio;
    this.distancia_2=data.distancia;
    this.edad_2=data.edad;
    this.constelacion_2=data.constelacion;
    this.precio_2=data.precio;
    this.cantidad_2=data.cantidad;
    this.estrellasForm.setValue({
    nombre: data.nombre,
    tipo_espectral: data.tipo_espectral,
    luminosidad: data.luminosidad,
    masa: data.masa,
    radio: data.radio,
    distancia: data.distancia,
    edad: data.edad,
    constelacion: data.constelacion,
    precio: data.precio,
    cantidad: data.cantidad,
    })
    })
    }
    }    

    showAlert_a() {
        const id = prompt('Ingresa el ID :');
        if (id) {
          this.comprobarRol_a(id);
        }
      }
      
      comprobarRol_a(id: string) {
       
        this._estrellaService.getRol(id).subscribe(
          data => {
          console.log(data);
          this.rol=data;
          if(data!="admin"){
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