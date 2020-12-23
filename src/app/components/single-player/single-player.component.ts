import {Component, Input, OnInit} from '@angular/core';
import {PlayerModel} from "../../models/PlayerModel";

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.scss']
})
export class SinglePlayerComponent implements OnInit {

  @Input() public player: PlayerModel;
  @Input() public hideStats: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public getHeight(): string {
    if (this.player.height_feet) {
      return `${this.player.height_feet}.${this.player.height_inches} ft`;
    }
    return 'N/A';
  }

  public getWeight(): string {
    if (this.player.weight_pounds) {
      return `${this.player.weight_pounds} lbl`;
    }
    return 'N/A';
  }
}
