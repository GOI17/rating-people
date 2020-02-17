import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { Person } from '@interfaces/person.interface';

@Injectable({ providedIn: 'root' })
export class PersonFormValidators {
  constructor(private http: HttpClient) {}

  checkIfNameIsRegistered(name: string) {
    return this.http.get('http://localhost:3000/people').pipe(
      delay(1000),
      map((people: Person[]) => people.filter(person => person.name === name)),
      map(people => !people.length)
    );
  }
}
