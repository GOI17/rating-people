import { Component, OnInit } from '@angular/core';
import { GetPeople } from './getPeople.service';
import { CommentsComponent } from './dialogs/comments.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  people: any[] = [];
  enablePersonForm: boolean = false;

  constructor(
      private getPeople: GetPeople,
      private commentsDialog: MatDialog
    ) {
    window.onscroll = e => {
      const header = document.querySelector('div.row.app-title').classList;
      if (window.scrollY > 147) {
        if (header.contains('m-4')) {
          header.remove('m-4');
        }
      } else {
        header.add('m-4');
      }
    };
  }

  showPersonForm(): void {
    const formContainer = document.querySelector('.form-container').classList;
    if (formContainer.contains('hide-form-container')) {
      formContainer.remove('hide-form-container');
      formContainer.add('show-form-container');
      this.enablePersonForm = true;
    } else {
      formContainer.remove('show-form-container');
      formContainer.add('hide-form-container');
      this.enablePersonForm = false;
    }
  }

  async ngOnInit() {
    const response = await this.getPeople.json();
    this.people = response.map(person => {
      person = {
        ...person,
        rate: 0,
        comments: [
          {
            // tslint:disable-next-line: max-line-length
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt velit minima, possimus explicabo in eum optio, voluptas reprehenderit iste, exercitationem eaque excepturi veniam saepe totam libero molestiae beatae dolores!',
            rate: Math.floor(Math.random() * 5) + 1,
            time: Date.now()
          },
          {
            // tslint:disable-next-line: max-line-length
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt velit minima, possimus explicabo in eum optio, voluptas reprehenderit iste, exercitationem eaque excepturi veniam saepe totam libero molestiae beatae dolores!',
            rate: Math.floor(Math.random() * 5) + 1,
            time: Date.now()
          },
          {
            // tslint:disable-next-line: max-line-length
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt velit minima, possimus explicabo in eum optio, voluptas reprehenderit iste, exercitationem eaque excepturi veniam saepe totam libero molestiae beatae dolores!',
            rate: Math.floor(Math.random() * 5) + 1,
            time: Date.now()
          },
          {
            // tslint:disable-next-line: max-line-length
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt velit minima, possimus explicabo in eum optio, voluptas reprehenderit iste, exercitationem eaque excepturi veniam saepe totam libero molestiae beatae dolores!',
            rate: Math.floor(Math.random() * 5) + 1,
            time: Date.now()
          }
        ]
      };
      const rates = person.comments.map((c: any) => c.rate);
      const avgrate = rates.reduce((a: number, b: number) => a + b, 0) / rates.length;
      person.rate = avgrate;
      return person;
    });
  }

  comment(id: number, comment: string) {
    const index = this.people.findIndex(person => person.id === id);
    const newComment = { content: comment, time: Date.now() };
    this.people[index].comments = [...this.people[index].comments, newComment];
  }

  addPerson(name: string, username: string, service: string) {
    this.people.unshift({
      avatar: 'https://picsum.photos/400',
      name,
      username,
      service,
      rate: Math.floor(Math.random() * 5) + 1,
      comments: []
    });
  }

  openComments(id: number) {
    const index = this.people.findIndex(person => person.id === id);
    this.commentsDialog.open(CommentsComponent, {
      maxWidth: '800px',
      minWidth: '800px',
      data: {
        comments: this.people[index].comments
      }
    });
  }

}
