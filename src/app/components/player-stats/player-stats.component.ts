import { Component, OnInit } from '@angular/core';
import {RestClientService} from "../../services/rest-client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayerModel} from "../../models/PlayerModel";
import {SeasonAverage} from "../../models/SeasonAverages";

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {

  private id: number;
  public player: PlayerModel;
  public seasonAverages: SeasonAverage;
  public season: number = 2019; // TODO

  constructor(private restClientService: RestClientService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.getIdRouteParam();
    this.restClientService.getPlayer(this.id)
                          .subscribe(response => {
                            this.player = response;
                          });
    this.fetchSeasonAverages();
  }

  public fetchSeasonAverages(): void {
    this.restClientService.getSeasonAverages(this.season, this.id)
      .subscribe(response => {
        this.seasonAverages = response.data && response.data[0];
      });
  }

  private getIdRouteParam(): number {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/']);
      return -1; // should not reach this code
    }
    return +id;
  }

}
