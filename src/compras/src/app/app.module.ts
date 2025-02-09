import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecomprasComponent } from './components/createcompras/createcompras.component';
import { ListcomprasComponent } from './components/listcompras/listcompras.component';
import { ModificarcompraComponent } from './components/modificarcompra/modificarcompra.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatecomprasComponent,
    ListcomprasComponent,
    ModificarcompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
