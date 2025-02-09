import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
selector: 'app-createusuarios',
templateUrl: './createusuarios.component.html',
styleUrls: ['./createusuarios.component.css']
})

export class CreateusuariosComponent implements OnInit {
usuariosForm: FormGroup;
id: string | null;

constructor(private fb: FormBuilder, private router:Router, private _usuarioService: UsuariosService, private aRouter: ActivatedRoute){
this.usuariosForm = this.fb.group({
rol: ['', Validators.required],
})
this.id = this.aRouter.snapshot.paramMap.get('id');
}

ngOnInit(): void {
}

addusuarios(){
const USUARIOS: Usuarios = {
rol: this.usuariosForm.get('rol')?.value,
}
//Verificar existe el producto
/*if (this.id !== null) {
    //existe el producto se edita
    this._usuarioService.editEstrella(this.id, USUARIOS).subscribe(data => {
    this.router.navigate(['/admin']);
    }, error => {
    console.log(error);
    this.usuariosForm.reset();
})
} else {*/
    //no existe el producto se crea
    console.log(USUARIOS);
    window.confirm('¿Seguro que quiere registar este usuario?');
    this._usuarioService.saveUsuario(USUARIOS).subscribe(data => {
        alert("Su usuario se ha creado correctamente con ID "+data._id);
        this.router.navigate(['/admin'])
        }, error => {
        console.log(error);
        this.usuariosForm.reset();
        })
        
    //}

}
}