import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetPeople {

  constructor(private http: HttpClient) {}

  json(): Promise<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.ir/users').toPromise();
  }
}
