import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '@dialogs/comments/comments.component';
import { Person } from '@interfaces/person.interface';
import { GetPerson } from '@services/getPerson.service';

@Component({
  selector: 'app-body-cards-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBodyCardsCardComponent {
  @Input() person: Person;

  get rate() {
    const totalComments = this.person.comments.length;
    const rates = this.person.comments.map((c: any) => c.rate);
    return rates.reduce((a: number, b: number) => a + b, 0) / totalComments;
  }

  constructor(
    private getPerson: GetPerson,
    private commentsDialog: MatDialog
  ) {}

  openComments(person: Person, comment: boolean) {
    this.getPerson.changeSelectedPerson(person.id);
    this.commentsDialog.open(CommentsComponent, {
      maxWidth: '800px',
      maxHeight: '600px',
      data: {
        title: person.name,
        comment
      }
    });
  }
}
