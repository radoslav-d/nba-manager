import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamsComponent} from "./components/teams/teams.component";
import {PlayersComponent} from "./components/players/players.component";
import {GamesComponent} from "./components/games/games.component";
import {HomeComponent} from "./components/home/home.component";
import {PlayerStatsComponent} from "./components/player-stats/player-stats.component";

const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'stats/:id', component: PlayerStatsComponent},
  {path: 'games', component: GamesComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
