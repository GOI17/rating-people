import { Component, ChangeDetectionStrategy } from '@angular/core';
import { People } from '@services/people.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private peopleStore: People) {
    this.peopleStore.load();
  }
}
