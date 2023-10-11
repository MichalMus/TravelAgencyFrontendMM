import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostPerson } from 'src/app/modules/core/interfaces/person';
import { AuthserviceService } from 'src/app/modules/core/services/authservice.service';
import { FormsService } from 'src/app/modules/core/services/forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hide = true;
  registerForm = new FormGroup({
    personName: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    personSurname: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
        Validators.minLength(5),
      ],
      nonNullable: true,
    }),
    personPesel: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    birthdate: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    cityOfLiving: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    streetAndNumber: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    zipCode: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    telephoneNumber: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    private authService: AuthserviceService,
    private router: Router,
    private formsService: FormsService,
  ) {}

  onRegister() {
    const userData: PostPerson = this.registerForm.getRawValue();
    this.authService.register(userData).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigate(['/login']);
      },
    });
  }
  get controls() {
    return this.registerForm.controls;
  }
  getErrorMessage(control: FormControl) {
    return this.formsService.getErrorMessage(control);
  }
}
