import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@assets/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentsComponent } from '@dialogs/comments.component';
import { AppHeaderComponent } from '@components/header/header.component';
import { AppHeaderPersonFormComponent } from '@components/header/header-components/person-form/personform.component';
import { AppBodyComponent } from '@components/body/body.component';
import { AppFooterComponent } from '@components/footer/footer.component';
import { AppBodyTitleComponent } from '@components/body/body-components/title/title.component';
import { AppBodyCardsComponent } from '@components/body/body-components/cards/cards.component';
import { AppBodyCardsCardComponent } from '@components/body/body-components/cards/cards-components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHeaderPersonFormComponent,
    AppBodyComponent,
    AppBodyTitleComponent,
    AppBodyCardsComponent,
    AppBodyCardsCardComponent,
    AppFooterComponent,
    CommentsComponent,
  ],
  entryComponents: [CommentsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
