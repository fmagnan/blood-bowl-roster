import type { SkillCategory } from "./skill.model";

export interface Player {
  id: number;
  position: string;
  playerStats: number[];
  cost: number;
  skills: number[];
  primary: SkillCategory[];
  secondary: SkillCategory[];
}

export interface PlayerCatalogue {
  players: Player[];
}