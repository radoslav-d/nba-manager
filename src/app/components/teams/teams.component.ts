import { Component, OnInit } from '@angular/core';
import {RestClientService} from "../../services/rest-client.service";
import {TeamModel} from "../../models/TeamModel";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public teams: TeamModel[];

  constructor(private restClientService: RestClientService) { }

  ngOnInit(): void {
    this.restClientService.getAllTeams()
                          .subscribe(response => {
      this.teams = response.data;
    })
  }

}
