import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { GetPeople } from '@services/getPeople.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-body-cards-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBodyCardsCardComponent {
  @Input() person: any = {};
  person$ = this.getPeople.selectedPerson$;

  constructor(private getPeople: GetPeople) {}

  openComments(id: number) {
    this.getPeople.changeSelectedPerson(id);
  }
}
