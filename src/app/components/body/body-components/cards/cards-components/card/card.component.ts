import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { GetPerson } from '@services/getPerson.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '@dialogs/comments/comments.component';
import { Person } from '@interfaces/person.interface';

@Component({
  selector: 'app-body-cards-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBodyCardsCardComponent {
  @Input() person: any = {};
  person$ = this.getPeople.selectedPerson$;

  constructor(
    private getPeople: GetPerson,
    private commentsDialog: MatDialog
  ) {}

  openComments(person: Person, comment: boolean) {
    this.getPeople.changeSelectedPerson(person.id);
    this.commentsDialog.open(CommentsComponent, {
      maxWidth: '800px',
      minWidth: '800px',
      data: {
        comment,
        comments: person.comments
      }
    });
  }
}
