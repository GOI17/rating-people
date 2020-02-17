import { Injectable } from '@angular/core';
import { People } from '@services/people.service';
import { Person } from '@interfaces/person.interface';

@Injectable({ providedIn: 'root' })
export class CreatePerson {
  constructor(private people: People) {}

  run(person: Person) {
    this.people.create(person);
  }
}
