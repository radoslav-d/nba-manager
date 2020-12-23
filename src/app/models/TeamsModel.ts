import {TeamModel} from "./TeamModel";
import {MetadataModel} from "./MetadataModel";

export interface TeamsModel {
  data: TeamModel[];
  meta: MetadataModel;
}
