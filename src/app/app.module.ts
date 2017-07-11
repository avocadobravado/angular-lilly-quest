import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { YesComponent } from './yes/yes.component';
import { GameOverComponent } from './game-over/game-over.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    YesComponent,
    GameOverComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
