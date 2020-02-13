import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GetPeople {

  constructor(private http: HttpClient) {}

  json(): Promise<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.ir/users').toPromise();
  }
}
