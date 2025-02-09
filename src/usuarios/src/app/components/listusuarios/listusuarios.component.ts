import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios} from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-listusuarios',
  templateUrl: './listusuarios.component.html',
  styleUrls: ['./listusuarios.component.css']
})
export class ListusuariosComponent implements OnInit {
  listUsuarios: Usuarios[] = [];
  ListUsuariosForm: FormGroup;
  valor_id:String ='';
  rol:String='';
  muestra_tabla: boolean=false;
  busqueda: boolean=false;

  constructor(private fb: FormBuilder,private usuariosService: UsuariosService,private router:Router,) {
    this.ListUsuariosForm = this.fb.group({
      rol: [''],
      })
   }
  
  ngOnInit(): void {
    this.muestra_tabla=false;
    this.busqueda=false;
  }
  
  getUsuarios(){
  this.usuariosService.getUsuarios().subscribe(
  data => {
  console.log(data);
  this.listUsuarios = data;
  }, error => {
  console.log(error);
  })
  }

  deleteUsuario(id: any){
    const item_id = prompt('Ingresa el ID :');
      if(item_id){
        this.usuariosService.getRol(item_id).subscribe(
          data => {
          console.log(data);
          this.rol=data;
          if(data!="admin"||data!="cliente"){
            this.router.navigateByUrl('/admin');
          }
    if (window.confirm('¿Está seguro de que desea eliminar esta estrella?')) {
    this.usuariosService.deleteUsuario(id).subscribe(data => {
    this.getUsuarios();
    alert("Su usuario se ha eliminado correctamente");
    window.location.reload();
    }, error => {
    console.log(error)
    })
       }
    }, error => {
        alert("No tiene suficientes permisos");
        this.router.navigateByUrl('/admin');
        console.log(error);
    })
    }
    }

  searchUsuarioId(valor_id: any){
    this.busqueda=true;
    console.log(valor_id);
      this.usuariosService.getAUsuarioById(valor_id).subscribe(
        data => {
        console.log(data);
        this.listUsuarios = data;
        }, error => {
        console.log(error);
        })
      
      
}

showAlert_a() {
  const id = prompt('Ingresa el ID :');
  if (id) {
    this.comprobarRol_a(id);
  }
}
comprobarRol_a(id: string) {
 
  this.usuariosService.getRol(id).subscribe(
    data => {
    console.log(data);
    this.rol=data;
    if(data!="admin"){
      alert("No tiene suficientes permisos");
      this.router.navigateByUrl('/admin');
    }
    }, error => {
    console.log(error);
    })

}
listar(){
  const id = prompt('Ingresa el ID :');
  this.busqueda=false;
  if (id) { 
      this.usuariosService.getRol(id).subscribe(
      data => {
      console.log(data);
      this.rol=data;
      if(data!="admin"){
        alert("No tiene suficientes permisos");
        window.location.reload();
      }else{
        this.muestra_tabla=true;
  this.rol=this.ListUsuariosForm.get('rol')?.value,
  console.log(this.rol);

  if(this.rol=="usuarios"){
    this.usuariosService.getUsuarios().subscribe(
      data => {
      console.log(data);
      this.listUsuarios = data;
      }, error => {
      console.log(error);
      })
  }else if(this.rol=="admin"){
      this.usuariosService.getAdmin().subscribe(
        data => {
        console.log(data);
        this.listUsuarios = data;
        }, error => {
        console.log(error);
        })
  }else if(this.rol=="cliente"){
      this.usuariosService.getCliente().subscribe(
        data => {
        console.log(data);
        this.listUsuarios = data;
        }, error => {
        console.log(error);
        })
      }
      }
      }, error => {
      console.log(error);
      })
  
  
    }
    

}

}

