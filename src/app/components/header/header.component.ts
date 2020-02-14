import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class AppHeaderComponent  {
  enablePersonForm: boolean;

  constructor( ) {
    this.enablePersonForm = false;
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
}
