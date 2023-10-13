import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person, PostClientForm } from '../../core/interfaces/person';
import { FormsService } from '../../core/services/forms.service';
import { ClientsService } from '../../core/services/clients.service';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';

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
  @Input() editMode = false;
  @Input() client!: Person;
  @Output() closeDialog = new EventEmitter<void>();
  observer: Observer<unknown> = {
    next: () => {
      this.errorMessage = '';
      if (this.editMode) {
        this.emitCloseDialog();
      }
      this.route.navigate(['/clients']);
    },
    error: (err) => {
      this.errorMessage = 'Wystąpił błąd';
    },
    complete: () => {},
  };

  clientForm!: FormGroup<PostClientForm>;
  get controls() {
    return this.clientForm.controls;
  }

  ngOnInit(): void {
    this.initForm();
  }
  onAddClient() {
    if (this.editMode) {
      this.clientServices
        .editPerson(this.clientForm.getRawValue(), this.client.id)
        .subscribe(this.observer);
      return;
    }
    this.clientServices
      .addPerson(this.clientForm.getRawValue())
      .subscribe(this.observer);
  }

  getErrorMessage(control: FormControl) {
    return this.formsService.getErrorMessage(control);
  }

  private initForm() {
    this.clientForm = new FormGroup({
      personName: new FormControl(this.editMode ? this.client.personName : '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      personSurname: new FormControl(
        this.editMode ? this.client.personSurname : '',
        {
          validators: [Validators.required],
          nonNullable: true,
        },
      ),
      email: new FormControl(this.editMode ? this.client.email : '', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(30),
          Validators.minLength(5),
        ],
        nonNullable: true,
      }),
      personPesel: new FormControl(
        this.editMode ? this.client.personPesel : '',
        {
          validators: [Validators.required],
          nonNullable: true,
        },
      ),
      // birthdate: new FormControl('', {
      //   validators: [Validators.required],
      //   nonNullable: true,
      // }),
      cityOfLiving: new FormControl(
        this.editMode ? this.client.cityOfLiving : '',
        {
          validators: [Validators.required],
          nonNullable: true,
        },
      ),
      streetAndNumber: new FormControl(
        this.editMode ? this.client.streetAndNumber : '',
        {
          validators: [Validators.required],
          nonNullable: true,
        },
      ),
      zipCode: new FormControl(this.editMode ? this.client.zipCode : '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      telephoneNumber: new FormControl(
        this.editMode ? this.client.telephoneNumber : '',
        {
          validators: [Validators.required],
          nonNullable: true,
        },
      ),
    });
  }

  emitCloseDialog() {
    this.closeDialog.emit();
  }
}
