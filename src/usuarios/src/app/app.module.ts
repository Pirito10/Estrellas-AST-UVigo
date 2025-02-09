import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateusuariosComponent } from './components/createusuarios/createusuarios.component';
import { ListusuariosComponent } from './components/listusuarios/listusuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateusuariosComponent,
    ListusuariosComponent,
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
