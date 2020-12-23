import {PlayerModel} from "./PlayerModel";
import {MetadataModel} from "./MetadataModel";

export interface PlayersModel {
  data: PlayerModel[];
  meta: MetadataModel;
}
