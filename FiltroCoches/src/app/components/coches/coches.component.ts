import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.scss'
})
export class CochesComponent {

  @Input() marca: string
  // con esto si va (pero no puesto en el tutorial https://www.youtube.com/watch?v=pWPFWwohAMc&list=PLezsbUDiwcpmhNiMzVPYJXV0Rqn71G4PU&index=26 ): 
  | undefined

  /* Por si quisiera crear más características:
  @Input() modelo: string;
  @Input() color: string; */

}
