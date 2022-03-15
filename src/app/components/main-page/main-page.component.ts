import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personas: Persona[] = [
    {
      nombre: 'Elmer Curio',
      edad: 69,
      direccion: '742 Evergreen Terrace'
    },
    {
      nombre: 'Elba Surita',
      edad: 42,
      direccion: '742 Evergreen Terrace'
    },
  ]

  nuevo: Persona = {
    nombre: 'Zacarias Flores del Campo',
    edad: 13,
    direccion: '742 Evergreen Terrace'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
