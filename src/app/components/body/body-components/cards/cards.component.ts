import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { People } from '@services/people.service';

@Component({
  selector: 'app-body-cards',
  templateUrl: './cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBodyCardsComponent {
  people$ = this.peopleStore.people$;

  constructor(private peopleStore: People) {}

}
