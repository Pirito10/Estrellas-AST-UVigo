import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateestrellasComponent } from './components/createestrellas/createestrellas.component';
import { ListestrellasComponent } from './components/listestrellas/listestrellas.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateestrellasComponent,
    ListestrellasComponent,
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
