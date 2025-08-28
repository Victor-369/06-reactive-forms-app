import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  // Formulario reactivo

  //Forma tradicional
  // myForm = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });


  // Forma recomendada (form builder)
  private fb = inject(FormBuilder);
  formUtils = FormUtils;


  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  onSave() {
    if(this.myForm.invalid) {         // Si el formulario es inválido
      this.myForm.markAllAsTouched(); // Toca todos los campos del formulario, así hará saltar las validaciones de todos ellos.

      return;
    }

    console.log(this.myForm.value);

    // this.myForm.reset({
    //   price: 100,
    //   inStorage: 50,
    //   name: 'ValorPorDefecto',
    // });

    this.myForm.reset();
  }
}
