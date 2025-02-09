import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecomprasComponent } from './components/createcompras/createcompras.component';
import { ListcomprasComponent } from './components/listcompras/listcompras.component';
import { ModificarcompraComponent } from './components/modificarcompra/modificarcompra.component';


const routes: Routes = [
  { path: 'admin/', component: ListcomprasComponent },
  { path: 'admin/createcompras', component: CreatecomprasComponent},
  { path: 'admin/modificarcompras/:id', component: ModificarcompraComponent},
  { path: 'admin/editcompras/:id', component: CreatecomprasComponent},
  { path: 'admin/listcompras', component: ListcomprasComponent},
  { path: '**', redirectTo: 'admin/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }