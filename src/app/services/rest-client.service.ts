import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {TeamsModel} from "../models/TeamsModel";
import {Observable} from "rxjs";
import {TeamModel} from "../models/TeamModel";
import {PlayersModel} from "../models/PlayersModel";
import {PlayerModel} from "../models/PlayerModel";
import {GamesModel} from "../models/GamesModel";
import {GameModel} from "../models/GameModel";
import {StatsModel} from "../models/StatsModel";
import {SeasonAverages} from "../models/SeasonAverages";

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  private readonly API_URL = 'https://www.balldontlie.io/api/v1';
  public readonly DEFAULT_PER_PAGE = 25;

  constructor(private http: HttpClient) { }

  public getAllTeams(page?: number, per_page?: number): Observable<TeamsModel> {
    let params = this.getHttpParams(page, per_page);
    return this.http.get<TeamsModel>(`${this.API_URL}/teams`, {params});
  }

  public getTeam(id: number): Observable<TeamModel> {
    return this.http.get<TeamModel>(`${this.API_URL}/teams/${id}`);
  }

  public getAllPlayers(page?: number, per_page?: number, search?: string): Observable<PlayersModel> {
    let params = this.getHttpParams(page, per_page);
    if (search) {
      params = params.append('search', search);
    }
    return this.http.get<PlayersModel>(`${this.API_URL}/players`, {params});
  }

  public getPlayer(id: number): Observable<PlayerModel> {
    return this.http.get<PlayerModel>(`${this.API_URL}/players/${id}`);
  }

  public getAllGames(page?: number, per_page?: number, season?: number, team_id?: number): Observable<GamesModel> {
    let params = this.getHttpParams(page, per_page);
    if (season) {
      params = params.append('seasons[]', `${season}`);
    }
    if (team_id) {
      params = params.append('team_ids[]', `${team_id}`);
    }
    return this.http.get<GamesModel>(`${this.API_URL}/games`, {params});
  }

  public getGame(id: number): Observable<GameModel> {
    return this.http.get<GameModel>(`${this.API_URL}/games/${id}`);
  }

  public getStats(page: number, per_page: number, player_id: number, season: number): Observable<StatsModel> {
    let params = this.getHttpParams(page, per_page);
    if (season) {
      params = params.append('seasons[]', `${season}`);
    }
    if (player_id) {
      params = params.append('player_ids[]', `${player_id}`);
    }
    return this.http.get<StatsModel>(`${this.API_URL}/stats`, {params});
  }

  public getSeasonAverages(season: number, player_id: number): Observable<SeasonAverages> {
    let params = new HttpParams().append('season', `${season}`)
                                 .append('player_ids[]', `${player_id}`);
    return this.http.get<SeasonAverages>(`${this.API_URL}/season_averages`, {params});
  }

  private getHttpParams(page?: number, per_page?: number): HttpParams {
    let params = new HttpParams();
    if (page) {
      params = params.append('page', `${page}`);
    }
    if (per_page) {
      params = params.append('per_page', `${per_page}`);
    }
    return params;
  }
}
