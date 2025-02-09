import { Component, OnInit } from '@angular/core';
import { Compras} from 'src/app/models/compras';
import { Router } from '@angular/router';
import { Estrellas} from '../../../../../estrellas/src/app/models/estrellas';
import { ComprasService } from 'src/app/services/compras.service';


@Component({
  selector: 'app-listcompras',
  templateUrl: './listcompras.component.html',
  styleUrls: ['./listcompras.component.css']
})
export class ListcomprasComponent implements OnInit {
  listCompras: Compras[] = [];
  listEstrellas: Estrellas[] = [];
  valor_precio: Number=0;
  valor_id:String ='';
  valor_e:Number=0;
  buscarPorID: boolean = false;
  isCliente: boolean = false;
  rol: String='';
  listar: boolean =false ;
 

  constructor(private comprasService: ComprasService,private router: Router) { }
  
  ngOnInit(): void {
    this.showAlert_c();
    this.getEstrellas();
    this.buscarPorID = false;
  this.isCliente = false;
  this.listar=false;
  }
  
  getCompras(){
  this.comprasService.getCompras().subscribe(
  data => {
  console.log(data);
  this.listCompras = data;
  }, error => {
  console.log(error);
  })
  }
  
  getEstrellas(){
    this.comprasService.getEstrellas().subscribe(
    data => {
    console.log(data);
    this.listEstrellas = data;
    }, error => {
    console.log(error);
    })
    }

  deleteCompras(id: any){
 
              this.showAlert_c();
                   if(this.isCliente){
                     if (window.confirm('¿Está seguro de que desea eliminar esta estrella?')) {
                       this.comprasService.deleteCompras(id).subscribe(data => {
                       this.getCompras();
                       }, error => {
                       console.log(error)
                       })
                          }
                   
                        }else {
                          alert('No tiene suficientes permisos');
                          
                         }
        this.listar=false; 
        window.location.reload();               
      
    }
    searchCompraCantidad(valor_precio: any){
      const item_id = prompt('Ingresa el ID :');
      if(item_id){
        this.comprasService.getRol(item_id).subscribe(
          data => {
          console.log(data);
          this.isCliente=true;
          if(data!="cliente"){
            alert("No tiene suficientes permisos");
            this.router.navigateByUrl('/admin');
          }}, error => {
            console.log(error);
            })
      if(this.isCliente){
      console.log(valor_precio);
      console.log(item_id);
      this.comprasService.getACompraByCantidad(valor_precio,item_id).subscribe(
        data => {
        console.log(data);
        this.listCompras = data;
        }, error => {
        console.log(error);
        })
      }else {
        alert('No tiene suficientes permisos');
      }
    }
  }
  

  searchCompraId(valor_id: any){
    this.listar=false;
    this.showAlert_c();
      if(this.isCliente){
        this.comprasService.getACompraById(valor_id).subscribe(
          data => {
          console.log(data);
          this.listCompras = data;
          }, error => {
          console.log(error);
          })
         
          this.buscarPorID = true;
        }else {
            alert('No tiene suficientes permisos');
          }
}



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
 
  this.comprasService.getRol(id).subscribe(
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

comprobarRol_c(id: string) {
  
  this.comprasService.getRol(id).subscribe(
    data => {
    console.log(data);
    this.isCliente = data === 'cliente';
    this.rol=data;
    if(data!="cliente"){
      alert("No tiene suficientes permisos");
      this.listar=false;
      this.router.navigateByUrl('/admin');
    }
    if(data=="cliente"){
      this.listar=true;
    }}, error => {
    console.log(error);
    })
    
}
}

