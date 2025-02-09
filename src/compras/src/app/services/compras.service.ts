import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compras } from '../models/compras';

@Injectable({
providedIn: 'root'
})
export class ComprasService {

url = 'http://localhost:3003/compras/';

constructor(private http:HttpClient) { }

getCompras(): Observable<any> {
return this.http.get(this.url);
}

saveCompras(compras:Compras): Observable<any> {
return this.http.post(this.url, compras);
}

deleteCompras(id:string): Observable<any> {
    return this.http.get(this.url + "borrar/"+id);
}
getAEstrella(id:string): Observable<any> {
    return this.http.get(this.url + id);
}

getACompra(id:string): Observable<any> {
    return this.http.get(this.url + "modificar/"+id);
}

editCompras(id:string, comprador:string,direccion:string): Observable<any> {
    return this.http.put(this.url + id, {comprador,direccion});
}

getACompraById(id:string): Observable<any> {
    return this.http.get(this.url + "id/"+id);
}

getACompraByCantidad(cantidad:number,id:string): Observable<any> {
    return this.http.post(this.url + "cantidad/",{cantidad,id});
}

  
getEstrellas(): Observable<any> {
    return this.http.get("http://localhost:3001/estrellas/");
    }

getRol(id:string): Observable<any> {
    return this.http.get("http://localhost:3002/usuarios/" + "rol/"+id);
}
}


