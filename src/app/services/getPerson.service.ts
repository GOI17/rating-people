import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { People } from './people.service';

@Injectable({ providedIn: 'root' })
export class GetPerson {
  people$ = this.people.people$;
  private personSelectedAction: BehaviorSubject<number> = new BehaviorSubject(0);
  selectedPerson$ = combineLatest(this.personSelectedAction, this.people$).pipe(
    map(([selectedPersonId, people]) =>
      people.find(person => person.id === selectedPersonId)
    )
  );

  constructor(private people: People) {}

  changeSelectedPerson(id: number) {
    this.personSelectedAction.next(id);
  }
}
