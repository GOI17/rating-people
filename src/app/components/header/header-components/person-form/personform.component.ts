import { Component } from '@angular/core';
import { Person } from '@interfaces/person.interface';
import { CreatePerson } from '@services/createPerson.service';
import { People } from '@services/people.service';

@Component({
  selector: 'app-header-person-form',
  templateUrl: './personform.component.html'
})
export class AppHeaderPersonFormComponent {
  serverError$ = this.peopleStore.serverError$;

  constructor(
    private peopleStore: People,
    private createPerson: CreatePerson
  ) {}

  addPerson(name: string, username: string, service: string) {
    const person: Person = {
      avatar: 'https://picsum.photos/200',
      name,
      username,
      comments: [],
      rate: 3,
      service
    };
    this.createPerson.run(person);
  }
}
