import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input() nueva: Persona = {
    nombre: '',
    edad: 0,
    direccion: ''
  }

  constructor() { }

  agregar(){
    //this.onNuevoPersona.emit(this.nuevo);
  }
}
