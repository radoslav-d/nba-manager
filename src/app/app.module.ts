import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './components/home/home.component';
import {TeamsComponent} from './components/teams/teams.component';
import {PlayersComponent} from './components/players/players.component';
import {GamesComponent} from './components/games/games.component';
import {FormsModule} from "@angular/forms";
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    TeamsComponent,
    PlayersComponent,
    GamesComponent,
    SinglePlayerComponent,
    PlayerStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
