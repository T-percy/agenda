import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TareasComponent } from './tareas.component';


@NgModule({
  declarations: [TareasComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TareasComponent]
})
export class TareasModule { }
