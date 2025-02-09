import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
providedIn: 'root'
})
export class UsuariosService {

url = 'http://localhost:3002/usuarios/';

constructor(private http:HttpClient) { }

getUsuarios(): Observable<any> {
return this.http.get(this.url);
}

getAdmin(): Observable<any> {
return this.http.get(this.url+ "admin/");
}

getCliente(): Observable<any> {
return this.http.get(this.url+ "cliente/");
}

deleteUsuario(id:string): Observable<any> {
    return this.http.delete(this.url + id);
}

saveUsuario(usuarios:Usuarios): Observable<any> {
return this.http.post(this.url, usuarios);
}

getAUsuario(id:string): Observable<any> {
    return this.http.get(this.url + id);
}
    
getAUsuarioById(id:string): Observable<any> {
    return this.http.get(this.url + "id/"+id);
}
getRol(id:string): Observable<any> {
    return this.http.get(this.url + "rol/"+id);
}

}


