import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FiltroCoches';

  marcaSeleccionada: string = 'Volvo';
  marcas: string[] = ['Volvo', 'Toyota', 'Mercedes', 'Hyundai'];

}
