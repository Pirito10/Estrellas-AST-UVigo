import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estrellas } from '../models/estrellas';

@Injectable({
providedIn: 'root'
})
export class EstrellasService {

url = 'http://localhost:3001/estrellas/';

constructor(private http:HttpClient) { }

getEstrellas(): Observable<any> {
return this.http.get(this.url);
}

deleteEstrella(id:string): Observable<any> {
    return this.http.delete(this.url + id);
}

saveEstrellas(estrellas:Estrellas): Observable<any> {
return this.http.post(this.url, estrellas);
}

getAEstrella(id:string): Observable<any> {
    return this.http.get(this.url + id);
}
    
editEstrella(id:string, estrellas:Estrellas): Observable<any> {
    return this.http.put(this.url + id, estrellas);
}

getAEstrellaById(id:string): Observable<any> {
    return this.http.get(this.url + "id/"+id);
}

getRol(id:string): Observable<any> {
    return this.http.get("http://localhost:3002/usuarios/" + "rol/"+id);
}

getAEstrellaByPrecio(precio:number): Observable<any> {
    return this.http.get(this.url + "precio/"+precio);
}

}


