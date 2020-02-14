import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GetPeople } from '@services/getPeople.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-body-cards',
  templateUrl: './cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBodyCardsComponent implements OnInit {
  people$ = this.getPeople.people$;
  constructor(private getPeople: GetPeople) {}

  ngOnInit() {
    this.people$.pipe(take(1)).subscribe(people => console.log(people));
  }

  // async ngOnInit() {
  //   const response = await this.getPeople.json();
  //   this.people = response.map(person => {
  //     person = {
  //       ...person,
  //       rate: 0,
  //       comments: [
  //         {
  //           // tslint:disable-next-line: max-line-length
  //           comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt velit minima, possimus explicabo in eum optio, voluptas reprehenderit iste, exercitationem eaque excepturi veniam saepe totam libero molestiae beatae dolores!',
  //           rate: Math.floor(Math.random() * 5) + 1,
  //           time: Date.now()
  //         },
  //         {
  //           // tslint:disable-next-line: max-line-length
  //           comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt velit minima, possimus explicabo in eum optio, voluptas reprehenderit iste, exercitationem eaque excepturi veniam saepe totam libero molestiae beatae dolores!',
  //           rate: Math.floor(Math.random() * 5) + 1,
  //           time: Date.now()
  //         },
  //         {
  //           // tslint:disable-next-line: max-line-length
  //           comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt velit minima, possimus explicabo in eum optio, voluptas reprehenderit iste, exercitationem eaque excepturi veniam saepe totam libero molestiae beatae dolores!',
  //           rate: Math.floor(Math.random() * 5) + 1,
  //           time: Date.now()
  //         },
  //         {
  //           // tslint:disable-next-line: max-line-length
  //           comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt velit minima, possimus explicabo in eum optio, voluptas reprehenderit iste, exercitationem eaque excepturi veniam saepe totam libero molestiae beatae dolores!',
  //           rate: Math.floor(Math.random() * 5) + 1,
  //           time: Date.now()
  //         }
  //       ]
  //     };
  //     const rates = person.comments.map((c: any) => c.rate);
  //     const avgrate = rates.reduce((a: number, b: number) => a + b, 0) / rates.length;
  //     person.rate = avgrate;
  //     return person;
  //   });
  // }

  // comment(id: number, comment: string) {
  //   const index = this.people.findIndex(person => person.id === id);
  //   const newComment = { content: comment, time: Date.now() };
  //   this.people[index].comments = [...this.people[index].comments, newComment];
  // }

  // openComments(id: number) {
  //   const index = this.people.findIndex(person => person.id === id);
  //   this.commentsDialog.open(CommentsComponent, {
  //     maxWidth: '800px',
  //     minWidth: '800px',
  //     data: {
  //       comments: this.people[index].comments
  //     }
  //   });
  // }

}
