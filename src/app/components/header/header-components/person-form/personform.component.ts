import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Person } from '@interfaces/person.interface';
import { CreatePerson } from '@services/createPerson.service';
import { People } from '@services/people.service';
import { PersonFormValidators } from '@services/personFormValidator.service';

@Component({
  selector: 'app-header-person-form',
  templateUrl: './personform.component.html'
})
export class AppHeaderPersonFormComponent {
  serverError$ = this.peopleStore.serverError$;
  private personForm = this.fb.group({
    name: [
      '',
      [Validators.pattern(/^[a-zA-Z ]*$/), Validators.required],
      [this.findPerson.bind(this)]
    ],
    username: [''],
    service: ['', [Validators.required]]
  });

  get form() {
    return this.personForm;
  }
  get name() {
    return this.form.controls.name;
  }
  get username() {
    return this.form.controls.username;
  }
  get service() {
    return this.form.controls.service;
  }

  constructor(
    private fb: FormBuilder,
    private peopleStore: People,
    private createPerson: CreatePerson,
    private personValidators: PersonFormValidators
  ) {}

  addPerson() {
    const person: Person = {
      avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      name: this.name.value,
      username: this.username.value,
      comments: [],
      rate: 0,
      service: this.service.value
    };
    this.createPerson.run(person);
    this.form.reset();
  }

  private findPerson(control: AbstractControl) {
    return this.personValidators.checkIfNameIsRegistered(control.value).pipe(
      map(res => {
        return res ? null : { nameRegistered: true };
      })
    );
  }
}
