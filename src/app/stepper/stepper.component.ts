import { Component } from '@angular/core';

import { StepperModule } from 'primeng/stepper'; // Boa lib para componentes e temas

@Component({
  selector: 'app-stepper',
  imports: [StepperModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {

}
