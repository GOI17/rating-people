import { Injectable } from '@angular/core';
import { People } from './people.service';
import { Person } from '@interfaces/person.interface';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CreatePerson {
  people$ = this.people.people$;

  constructor(private people: People) {}

  run(person: Person) {
    this.people$.pipe(take(1)).subscribe(people => {
      people.unshift(person);
      this.people.create(people);
    });
  }
}
