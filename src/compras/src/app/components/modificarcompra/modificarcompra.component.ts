import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { Compras } from 'src/app/models/compras';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
selector: 'app-modificarcompra',
templateUrl: './modificarcompra.component.html',
styleUrls: ['./modificarcompra.component.css']
})

export class ModificarcompraComponent implements OnInit {
EditcomprasForm: FormGroup;
cantidad_2='';
id_articulo_2='';
id_cliente_2='';
comprador_2='';
direccion_2='';
id: string | null;
rol: string='';
crear: boolean =false;


constructor(private fb: FormBuilder, private router:Router, private _compraService: ComprasService, private aRouter: ActivatedRoute){
this.EditcomprasForm = this.fb.group({
comprador: [''],
direccion: [''],

})
this.id = this.aRouter.snapshot.paramMap.get('id');

}

ngOnInit(): void {
    this.showAlert_c();
    if(this.crear){
        this.Edit();
    }
}

editCompras(){
    //this.Edit();
                console.log(this.EditcomprasForm.get('comprador')?.value) 
        if(this.id){
            window.confirm('¿Seguro que quiere modificar esta estrellas?');
            this._compraService.editCompras(this.id,this.EditcomprasForm.get('comprador')?.value,this.EditcomprasForm.get('direccion')?.value).subscribe(data => {
                alert("Se han modificado correctamente los datos ");
                this.router.navigate(['/admin'])
                }, error => {
                console.log(error);
                this.EditcomprasForm.reset();
                })  
        }
            

}
Edit() {
    console.log(this.id);
    if (this.id !== null) {
    this._compraService.getACompra(this.id).subscribe(data => {
    console.log(data);
    this.cantidad_2=data.cantidad;
    this.id_articulo_2=data.id_articulo;
    this.id_cliente_2=data.id_cliente;
    this.comprador_2=data.comprador;
    this.direccion_2=data.direccion;

    this.EditcomprasForm.setValue({
    comprador: data.comprador,
    direccion: data.direccion,
    })
    })
    }
    }

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
    

