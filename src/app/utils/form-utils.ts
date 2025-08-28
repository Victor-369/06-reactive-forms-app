import { FormGroup } from "@angular/forms";


export class FormUtils {
  // Expresiones regulares


  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  };

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if(!form.controls[fieldName].errors) return null;

    const errors = form.controls[fieldName].errors ?? {};

    // Recorrer todas las llaves de la variable errors
    for(const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${ errors['minlength'].requiredLength } caracteres.`;

        case 'min':
          return `Valor mínimo de ${ errors['min'].min }`;
      }
    }

    return null;
  }
}
