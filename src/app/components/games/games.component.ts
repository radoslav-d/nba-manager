import { Component, OnInit } from '@angular/core';
import {RestClientService} from "../../services/rest-client.service";
import {MetadataModel} from "../../models/MetadataModel";
import {GameModel} from "../../models/GameModel";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public games: GameModel[];
  public searchSeason: string;

  public pageMetadata: MetadataModel;
  private nextPageToGet: number;

  constructor(private restClientService: RestClientService) { }

  ngOnInit(): void {
  }

  public queryGames(): void {
    this.restClientService.getAllGames(this.nextPageToGet, this.restClientService.DEFAULT_PER_PAGE, +this.searchSeason)
      .subscribe(response => {
        this.games = response.data;
        this.pageMetadata = response.meta;
      });
  }

  public hasNext(): boolean {
    return this.pageMetadata && !!this.pageMetadata.next_page;
  }

  public hasPrevious(): boolean {
    return this.pageMetadata && this.nextPageToGet > 1;
  }

  public initialSearch(): void {
    this.nextPageToGet = 1;
    this.queryGames();
  }

  public nextPage(): void {
    this.nextPageToGet += 1;
    this.queryGames();
  }

  public previousPage(): void {
    this.nextPageToGet -= 1;
    this.queryGames();
  }

}
