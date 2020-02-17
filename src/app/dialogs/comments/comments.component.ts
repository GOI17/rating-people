import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '@interfaces/dialogdata.interface';

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html'
})
export class CommentsComponent implements OnInit {
  enableCommentsForm = false;

  constructor(
    public context: MatDialogRef<CommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.enableCommentsForm = this.data.comment ? true : false;
  }
}
