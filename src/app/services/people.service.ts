import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '@interfaces/person.interface';
import { ServerError } from '@interfaces/servererror.interface';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class People {
  private DataStore: BehaviorSubject<Person[]> = new BehaviorSubject([]);
  people$: Observable<Person[]> = this.DataStore.asObservable();
  private readonly serverError: BehaviorSubject<
    ServerError
  > = new BehaviorSubject(null);
  serverError$ = this.serverError.asObservable();

  constructor(private http: HttpClient) {}

  load() {
    this.http.get<Person[]>('http://localhost:3000/people').subscribe(
      data => this.DataStore.next(data.reverse()),
      error => console.log(error)
    );
  }

  create(person: Person) {
    this.http.post('http://localhost:3000/people', person).subscribe(
      (response: Person) => {
        const people = [...this.DataStore.value, response];
        this.DataStore.next(people);
        return;
      },
      error => {
        console.log(error);
        this.serverError.next(error);
        return;
      }
    );
  }

  update(person: Person) {
    this.http
      .put(`http://localhost:3000/people/${person.id}`, person)
      .subscribe(
        (response: Person) => {
          this.people$.pipe(take(1)).subscribe(people => {
            const updatedPeople = people.map(data =>
              data.id === response.id ? response : data
            );
            this.DataStore.next(updatedPeople);
          });
        },
        error => {
          console.log(error);
          this.serverError.next(error);
        }
      );
  }
}
