import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '@interfaces/person.interface';
import { ServerError } from '@interfaces/servererror.interface';

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
    this.http
      .get<Person[]>('http://localhost:3000/people')
      .subscribe(data => this.DataStore.next(data.reverse()));
  }

  create(people: Person[]) {
    this.http.post('http://localhost:3000/people', people[0]).subscribe(
      response => this.DataStore.next(people),
      error => {
        console.log(error);
        this.serverError.next(error);
      }
    );
  }

  update(person: Person) {
    this.http
      .put(`http://localhost:3000/people/${person.id}`, person)
      .subscribe(
        (response: Person) => {
          const index = this.DataStore.value.findIndex(
            data => data.id === response.id
          );
          if (response.id) {
            this.DataStore.value[index] = response;
            console.log(this.DataStore.value);
            // this.DataStore.next([]);
          }
        },
        error => {
          console.log(error);
          this.serverError.next(error);
        }
      );
  }
}
