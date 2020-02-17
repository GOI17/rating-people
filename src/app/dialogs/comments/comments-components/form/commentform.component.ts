import { Component } from '@angular/core';
import { Comment } from '@interfaces/comment.interface';
import { People } from '@services/people.service';
import { UpdatePerson } from '@services/updatePerson.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments-form',
  templateUrl: './commentform.component.html'
})
export class AppCommentsFormComponent {
  serverError$ = this.peopleStore.serverError$;
  private commentForm = this.fb.group({
    comment: ['', [Validators.required]],
    rate: [null, [Validators.required]]
  });

  get form() { return this.commentForm; }
  get comment() { return this.form.controls.comment; }
  get rate() { return this.form.controls.rate; }

  constructor(
    private fb: FormBuilder,
    private peopleStore: People,
    private updatePerson: UpdatePerson
  ) {}

  createComment() {
    const comment = {...this.commentForm.value, time: Date.now() };
    this.updatePerson.comment(comment);
    this.commentForm.reset();
  }
}
