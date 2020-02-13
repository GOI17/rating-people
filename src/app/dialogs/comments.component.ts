import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Comments {
  comment: string;
  rate: number;
  time: Date;
}

interface DialogData {
  comments: Comments[];
}

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html'
})
export class CommentsComponent implements OnInit {

  constructor(
      public context: MatDialogRef<CommentsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  ngOnInit() {
    console.log(this.data.comments);
  }
}
