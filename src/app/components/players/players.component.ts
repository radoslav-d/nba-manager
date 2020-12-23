import { Component, OnInit } from '@angular/core';
import {PlayerModel} from "../../models/PlayerModel";
import {RestClientService} from "../../services/rest-client.service";
import {MetadataModel} from "../../models/MetadataModel";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public players: PlayerModel[];
  public search: string;

  public pageMetadata: MetadataModel;
  private nextPageToGet: number;

  constructor(private restClientService: RestClientService) { }

  ngOnInit(): void {
  }

  public queryPlayers(): void {
    this.restClientService.getAllPlayers(this.nextPageToGet, this.restClientService.DEFAULT_PER_PAGE, this.search)
                          .subscribe(response => {
                            this.players = response.data;
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
    this.queryPlayers();
  }

  public nextPage(): void {
    this.nextPageToGet += 1;
    this.queryPlayers();
  }

  public previousPage(): void {
    this.nextPageToGet -= 1;
    this.queryPlayers();
  }

}
