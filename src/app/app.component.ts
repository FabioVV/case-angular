import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { StepperComponent } from './stepper/stepper.component'; // Peguei da internet esse stepper
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HeaderComponent, StepperComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  form: FormGroup

  constructor(public formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      cpf: ['', [Validators.required]],
    });
  }


  isSubmited: boolean = false
  isLoading: boolean = false
  submitError: boolean = false

  user: string = "assets/icons/user.png"
  correct: string = "assets/icons/correct.png"

  onCpfChange(value: string): void { // MASK
    const digits = value.replace(/\D/g, '').substring(0, 11); // Remove all non digits chars

    let formatted = '';
    if (digits.length > 0) {
      formatted = digits.substring(0, 3);
    }
    if (digits.length >= 4) {
      formatted += '.' + digits.substring(3, 6);
    }
    if (digits.length >= 7) {
      formatted += '.' + digits.substring(6, 9);
    }
    if (digits.length >= 10) {
      formatted += '-' + digits.substring(9, 11);
    }

    this.form.controls['cpf'].setValue(formatted);
  }

  onSubmit(){ // Aqui faria chamadas de API e etc...
    this.isSubmited = true
    const cpfVal = this.form.controls['cpf'].value as string

    if(cpfVal.length != 14 || this.form.controls['cpf'].hasError('required')){
      this.isSubmited = false
      this.submitError = true
      return
    }

    this.submitError = false

  }


  hasBeenSubmited(controlName: string): boolean {
    const control = this.form.get(controlName)
    return Boolean(control?.invalid)
      && (this.isSubmited )
    //|| Boolean(control?.dirty
    //|| Boolean(control?.touched)
  }
}
