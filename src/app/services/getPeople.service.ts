import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetPeople {
  private readonly url = 'https://jsonplaceholder.ir/users';
  people$: Observable<any> = this.http.get<any>(this.url).pipe(shareReplay());
  private personSelectedAction: BehaviorSubject<number> = new BehaviorSubject(0);
  selectedPerson$ = combineLatest(this.personSelectedAction, this.people$).pipe(
    map(([selectedPersonId, people]) =>
      people.find(person => person.id === selectedPersonId)
    )
  );

  constructor(private http: HttpClient) {}

  changeSelectedPerson(id: number) {
    this.personSelectedAction.next(id);
  }
}
