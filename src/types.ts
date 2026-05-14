export type Energy = 'calm' | 'medium' | 'high';

export type Setting =
  | 'car'
  | 'table'
  | 'outdoor'
  | 'walking'
  | 'bedtime'
  | 'anywhere';

export type Equipment = 'none' | 'paper' | 'cards' | 'phone-timer';

export type Skill =
  | 'memory'
  | 'observation'
  | 'verbal'
  | 'logic'
  | 'creativity'
  | 'physical';

export interface Game {
  id: string;
  name: string;
  aliases?: string[];
  short_description: string;
  rules: string;
  players_min: number;
  players_max: number;
  age_min: number;
  duration_minutes: [number, number];
  energy: Energy;
  setting: Setting[];
  equipment: Equipment;
  skills: Skill[];
  tags: string[];
}
