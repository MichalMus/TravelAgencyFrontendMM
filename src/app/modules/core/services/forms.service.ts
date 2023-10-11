import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'Musisz wprowadzić wartość';
    }
    if (control.hasError('minlength')) {
      return 'Przekazałeś za mało znaków';
    }
    return control.hasError('email') ? 'Nieprawidłowy adres e-mail' : '';
  }
}
