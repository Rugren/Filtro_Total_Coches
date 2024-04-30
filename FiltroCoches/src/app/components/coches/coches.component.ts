import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.scss'
})
export class CochesComponent implements OnChanges {

  datos = [
    { marca: 'Volvo', value: 10 },
    { marca: 'Volvo', value: 38 },
    { marca: 'Toyota', value: 6 },
    { marca: 'Toyota', value: 87 },
    { marca: 'Mercedes', value: 32 },
    { marca: 'Mercedes', value: 12 },
    { marca: 'Hyundai', value: 67 },
    { marca: 'Hyundai', value: 45 }
  ]

  ngOnChanges(changes: SimpleChanges) {
    // Así hecho en el tutorial (versiones antiguas) https://www.youtube.com/watch?v=pWPFWwohAMc&list=PLezsbUDiwcpmhNiMzVPYJXV0Rqn71G4PU&index=26 
    /* if (changes.marca.currentValue != changes.marca.previousValue) {
      const nuevaMarca = changes.marca.currentValue
      const datos = this.datos.filter(dato => dato.marca == nuevaMarca)
      console.log(datos)
      datos.forEach(dato => this.total += dato.value)
    } */

    if (changes['marca'].currentValue != changes['marca'].previousValue) {
      const nuevaMarca = changes['marca'].currentValue
      const datos = this.datos.filter(dato => dato.marca == nuevaMarca)
      console.log(datos)
      /* Esto es para que no se sume el total de la marca anterior (para que no esté sumando todo). 
      Así nos sumará solo las marcas de coche que marquemos: */
      this.total = 0
      datos.forEach(dato => this.total += dato.value)
    }
  }

  @Input() marca: string
    // con esto si va (pero no puesto en el tutorial https://www.youtube.com/watch?v=pWPFWwohAMc&list=PLezsbUDiwcpmhNiMzVPYJXV0Rqn71G4PU&index=26 ): 
    | undefined
  /* Por si quisiera crear más características:
  @Input() modelo: string;
  @Input() color: string; */

  total: number = 0

}
