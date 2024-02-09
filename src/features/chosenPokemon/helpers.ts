import { PokemonStat } from "../../common/types";
import { STATS_MAPPING } from "./constants";

export const heightToCm = (height: number) => {
  return `${height * 10} cm`;
};

export const mapStats = (
  stats: PokemonStat[]
): Array<{ label: string; value: string }> => {
  return stats.map(({ base_stat, effort, stat: { name } }) => ({
    label: STATS_MAPPING[name as keyof typeof STATS_MAPPING],
    value: base_stat.toString(),
  }));
};
