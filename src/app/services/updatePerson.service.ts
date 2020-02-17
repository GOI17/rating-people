import { Injectable } from '@angular/core';
import { GetPerson } from '@services/getPerson.service';
import { People } from '@services/people.service';
import { Comment } from '@interfaces/comment.interface';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UpdatePerson {
  selectedPerson$ = this.getPerson.selectedPerson$;

  constructor(private getPerson: GetPerson, private people: People) {}

  comment(comment: Comment) {
    this.selectedPerson$.pipe(take(1)).subscribe(person => {
      person = { ...person, comments: [...person.comments, comment] };
      this.people.update(person);
    });
  }
}
