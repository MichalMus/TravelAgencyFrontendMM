import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostClientForm } from '../../core/interfaces/person';
import { FormsService } from '../../core/services/forms.service';
import { ClientsService } from '../../core/services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  constructor(
    private formsService: FormsService,
    private clientServices: ClientsService,
    private route: Router,
  ) {}
  errorMessage = '';

  clientForm!: FormGroup<PostClientForm>;
  get controls() {
    return this.clientForm.controls;
  }

  ngOnInit(): void {
    this.initForm();
  }
  onAddClient() {
    this.clientServices.addPerson(this.clientForm.getRawValue()).subscribe({
      next: () => {
        this.errorMessage = '';
        this.route.navigate(['/clients']);
      },
      error: (err) => (this.errorMessage = 'Wystąpił błąd'),
    });
  }

  getErrorMessage(control: FormControl) {
    return this.formsService.getErrorMessage(control);
  }

  private initForm() {
    this.clientForm = new FormGroup({
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
      // birthdate: new FormControl('', {
      //   validators: [Validators.required],
      //   nonNullable: true,
      // }),
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
    });
  }
}
