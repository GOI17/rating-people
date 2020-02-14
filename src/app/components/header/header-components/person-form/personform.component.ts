import { Component } from '@angular/core';

@Component({
  selector: 'app-header-person-form',
  templateUrl: './personform.component.html'
})
export class AppHeaderPersonFormComponent {
  constructor() {}
  addPerson(name: string, username: string, service: string) {
    console.log('Name', name);
    console.log('User Name', username);
    console.log('Service', service);
    //   this.people.unshift({
    //     avatar: 'https://picsum.photos/400',
    //     name,
    //     username,
    //     service,
    //     rate: Math.floor(Math.random() * 5) + 1,
    //     comments: []
    //   });
  }
}
