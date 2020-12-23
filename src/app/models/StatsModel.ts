import {StatModel} from "./StatModel";
import {MetadataModel} from "./MetadataModel";

export interface StatsModel {
  data: StatModel[];
  meta: MetadataModel;
}
