//Modulos
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { TareasModule } from './components/tareas/tareas.module';

//Componentes
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    NavbarModule,
    TareasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
