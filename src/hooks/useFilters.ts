import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import type {
  Energy,
  Equipment,
  Game,
  Setting,
  Skill,
} from '../types';

export interface Filters {
  query: string;
  players: number | null; // exact count user wants to accommodate
  ageMax: number | null;  // youngest player at the table
  energy: Energy | null;
  setting: Setting | null;
  equipment: Equipment | null;
  skills: Skill[];
  durationMax: number;     // upper bound in minutes; show games whose min ≤ this
}

export const DEFAULT_FILTERS: Filters = {
  query: '',
  players: null,
  ageMax: null,
  energy: null,
  setting: null,
  equipment: null,
  skills: [],
  durationMax: 120,
};

export function useFilters(games: Game[]) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const fuse = useMemo(
    () =>
      new Fuse(games, {
        keys: [
          { name: 'name', weight: 3 },
          { name: 'aliases', weight: 2 },
          { name: 'short_description', weight: 1.5 },
          { name: 'tags', weight: 1 },
          { name: 'rules', weight: 0.3 },
        ],
        threshold: 0.38,
        ignoreLocation: true,
      }),
    [games],
  );

  const filtered = useMemo(() => {
    const base = filters.query.trim()
      ? fuse.search(filters.query.trim()).map((r) => r.item)
      : games;

    return base.filter((g) => {
      if (filters.players !== null) {
        if (filters.players < g.players_min || filters.players > g.players_max) {
          return false;
        }
      }
      if (filters.ageMax !== null && g.age_min > filters.ageMax) return false;
      if (filters.energy && g.energy !== filters.energy) return false;
      if (filters.setting && !g.setting.includes(filters.setting)) return false;
      if (filters.equipment && g.equipment !== filters.equipment) return false;
      if (filters.skills.length) {
        const has = filters.skills.every((s) => g.skills.includes(s));
        if (!has) return false;
      }
      if (g.duration_minutes[0] > filters.durationMax) return false;
      return true;
    });
  }, [games, fuse, filters]);

  const reset = () => setFilters(DEFAULT_FILTERS);

  return { filters, setFilters, filtered, reset };
}
