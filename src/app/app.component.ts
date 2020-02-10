import { Component, OnInit } from '@angular/core';
import { GetPeople } from './getPeople.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  people: any[] = [];
  constructor(private getPeople: GetPeople) {}

  async ngOnInit() {
    const response = await this.getPeople.json();
    this.people = response.map(person => {
      return (person = {
        ...person,
        rate: Math.floor(Math.random() * 5) + 1,
        comments: []
      });
    });
  }

  comment(id: number, comment: string) {
    const index = this.people.findIndex(person => person.id === id);
    console.log(this.people[index]);
    const newComment = { content: comment, time: Date.now() };
    this.people[index].comments = [...this.people[index].comments, newComment];
  }
}
