import {GameModel} from "./GameModel";
import {TeamModel} from "./TeamModel";

export interface StatModel {
  id: number;
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  game: GameStat;
  min: string;
  oreb: number;
  pf: number;
  player: PlayerStat;
}

interface GameStat {
  id: number;
  date: string;
  home_team_id: number;
  home_team_score: number;
  season: number;
  visitor_team_id: number;
  visitor_team_score: number;
  pts: number;
  reb: number;
  stl: number;
  team: TeamModel;
  turnover: number;
}

interface PlayerStat {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  team_id: number;
}
