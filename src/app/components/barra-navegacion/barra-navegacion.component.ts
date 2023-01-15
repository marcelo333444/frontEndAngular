import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private _CargarScripts: CargarScriptsService) {
    _CargarScripts.cargar(["app_navegacion"]);
  }
  

  ngOnInit(): void {
  }
}
