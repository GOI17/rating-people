import { Injectable } from '@angular/core';
import { Comment } from '@interfaces/comment.interface';
import { GetPerson } from './getPerson.service';
import { People } from './people.service';

@Injectable({ providedIn: 'root' })
export class UpdatePerson {
  selectedPerson$ = this.getPerson.selectedPerson$;

  constructor(private getPerson: GetPerson, private people: People) {}

  comment(comment: Comment) {
    this.selectedPerson$.subscribe(person => {
      person = { ...person, comments: [...person.comments, comment] };
      this.people.update(person);
    });
  }
}
