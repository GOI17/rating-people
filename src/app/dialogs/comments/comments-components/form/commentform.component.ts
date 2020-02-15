import { Component } from '@angular/core';
import { Person } from '@interfaces/person.interface';
import { Comment } from '@interfaces/comment.interface';
import { People } from '@services/people.service';
import { UpdatePerson } from '@services/updatePerson.service';

@Component({
  selector: 'app-comments-form',
  templateUrl: './commentform.component.html'
})
export class AppCommentsFormComponent {
  currentRate: number = 0;
  serverError$ = this.peopleStore.serverError$;

  constructor(
    private peopleStore: People,
    private updatePerson: UpdatePerson
  ) {}

  comment(comment: Comment) {
    comment = {...comment, time: Date.now() };
    this.updatePerson.comment(comment);
  }
}
