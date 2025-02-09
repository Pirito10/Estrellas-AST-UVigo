import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateusuariosComponent } from './components/createusuarios/createusuarios.component';
import { ListusuariosComponent } from './components/listusuarios/listusuarios.component';



const routes: Routes = [
  { path: 'admin/', component: ListusuariosComponent},
  { path: 'admin/createusuarios', component: CreateusuariosComponent},
  { path: 'admin/listusuarios', component: ListusuariosComponent},
  { path: '**', redirectTo: 'admin/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }