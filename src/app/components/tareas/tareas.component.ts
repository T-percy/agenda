import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
    //Crear objeto tarea
    const tarea: Tarea = {
      nombre_tarea: this.nombreTarea,
      estado:false
    }
    //Agregar el objeto tarea al array
    this.listaTareas.push(tarea);

    //Resetear input
    this.nombreTarea = '';
  }

  eliminarTarea(index:number): void {
   this.listaTareas.splice(index, 1);
  }

  actualizarTarea(index:number, tarea:Tarea): void{
    this.listaTareas[index].estado = !tarea.estado
  }

}
