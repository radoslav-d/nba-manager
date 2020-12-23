import {TeamModel} from "./TeamModel";

export interface GameModel {
  id: number;
  date: string;
  home_team_score: number;
  visitor_team_score: number;
  season: number;
  period: number;
  status: string;
  time: string;
  postseason: boolean;
  home_team: TeamModel;
  visitor_team: TeamModel;
}
