import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateestrellasComponent } from './components/createestrellas/createestrellas.component';
import { ListestrellasComponent } from './components/listestrellas/listestrellas.component';



const routes: Routes = [
  { path: 'admin/', component: ListestrellasComponent },
  { path: 'admin/createestrellas', component: CreateestrellasComponent },
  { path: 'admin/editestrellas/:id', component: CreateestrellasComponent},
  { path: '**', redirectTo: 'admin/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }