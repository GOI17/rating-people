import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe';

import { MaterialModule } from '@assets/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentsComponent } from './dialogs/comments.component';

@NgModule({
  declarations: [AppComponent, CommentsComponent, FilterPipe],
  entryComponents: [CommentsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
