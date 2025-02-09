import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estrellas} from 'src/app/models/estrellas';
import { EstrellasService } from 'src/app/services/estrellas.service';



@Component({
  selector: 'app-listestrellas',
  templateUrl: './listestrellas.component.html',
  styleUrls: ['./listestrellas.component.css']
})
export class ListestrellasComponent implements OnInit {
  listEstrellas: Estrellas[] = [];
  valor_precio: Number=0;
  valor_id:String ='';
  valor_e:Number=0;
  rol: string='';
  isAdmin: boolean =false;
  listar: boolean =false;

  constructor(public estrellasService: EstrellasService,private router: Router ) { }
  
  ngOnInit(): void {
  this.showAlert_a();
  console.log(this.listar)
  this.getEstrellas();
  this.isAdmin=false;
  this.listar=false;
  }
  
  getEstrellas(){
  this.estrellasService.getEstrellas().subscribe(
  data => {
  console.log(data);
  this.listEstrellas = data;
  }, error => {
  console.log(error);
  })
  }

  deleteEstrella(id: any){
    
      const item_id = prompt('Ingresa el ID :');
      if(item_id){
        this.estrellasService.getRol(item_id).subscribe(
          data => {
          console.log(data);
          this.rol=data;
          if(data!="admin"){
            alert("No tiene suficientes permisos");
            this.router.navigateByUrl('/admin');
          }
          if(this.rol=="admin"){
            if (window.confirm('¿Está seguro de que desea eliminar esta estrella?')) {
              this.estrellasService.deleteEstrella(id).subscribe(data => {
              this.getEstrellas();
              }, error => {
              console.log(error)
              })
                 }
          
                }
          }, error => {
          console.log(error);
          })
      }
  
    }
  
    searchEstrellaPrecio(valor_precio: any){
      this.listar=false;
      const item_id = prompt('Ingresa el ID :');
      if(item_id){
        this.estrellasService.getRol(item_id).subscribe(
        data => {
        console.log(data);
        if(data!="admin"){
          this.isAdmin=false;
          this.listar=false;
          alert("No tiene suficientes permisos");
          this.router.navigateByUrl('/admin');
        }else{
          this.isAdmin=true;
          this.listar=true;
        }}, error => {
          console.log(error);
        })
        if (this.rol=='admin') {
          console.log(valor_precio);
          this.estrellasService.getAEstrellaByPrecio(valor_precio).subscribe(
        data => {
        console.log(data);
        this.listEstrellas = data;
        }, error => {
        console.log(error);
        })
        } else {
          alert('No tiene suficientes permisos');
        }
      }
  }

  searchEstrellaId(valor_id: any){
    this.listar=false;
    const item_id = prompt('Ingresa el ID :');
    if(item_id){
      this.estrellasService.getRol(item_id).subscribe(
        data => {
        console.log(data);
        if(data!="admin"){
          this.isAdmin=false;
          this.listar=false;
          alert("No tiene suficientes permisos");
          this.router.navigateByUrl('/admin');
        }else{
          this.isAdmin=true;
          this.listar=true;
        }}, error => {
          console.log(error);
        })
    if(this.isAdmin){
      this.estrellasService.getAEstrellaById(valor_id).subscribe(
        data => {
        console.log(data);
        this.listEstrellas = data;
        }, error => {
        console.log(error);
        })
    } else {
      alert('No tiene suficientes permisos');
    }
  }
}

/*searchEstrellaE(valor_e: any){
  console.log(valor_e);
  this.estrellasService.getAEstrellaByE(valor_e).subscribe(
    data => {
    console.log(data);
    this.listEstrellas = data;
    }, error => {
    console.log(error);
    })

}*/

showAlert_a() {
  const id = prompt('Ingresa el ID :');
  if (id) {
    this.comprobarRol_a(id);
  }
  
}

showAlert_c() {
  const id = prompt('Ingresa el ID :');
  if (id) {
    this.comprobarRol_c(id);
  }
}


comprobarRol_a(id: string) {
 
  this.estrellasService.getRol(id).subscribe(
    data => {
    console.log(data);
    this.isAdmin = data === 'admin';
    this.rol=data;
    if(data=='admin'){
      this.listar=true;
    }
    if(data!="admin"){
      alert("No tiene suficientes permisos");
      this.listar=false;
      this.router.navigateByUrl('/admin');
    }
    }, error => {
    console.log(error);
    })
}

comprobarRol_c(id: string) {
  
  this.estrellasService.getRol(id).subscribe(
    data => {
    console.log(data);
    this.rol=data;
    if(data!="cliente"){
      alert("No tiene suficientes permisos");
      this.router.navigateByUrl('/admin');
    }
    }, error => {
    console.log(error);
    })
    
}


}




