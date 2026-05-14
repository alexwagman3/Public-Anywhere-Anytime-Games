import type {
  Energy,
  Equipment,
  Setting,
  Skill,
} from '../types';
import type { Filters } from '../hooks/useFilters';

interface Props {
  filters: Filters;
  setFilters: (next: Filters) => void;
  onReset: () => void;
  onRandom: () => void;
  resultCount: number;
}

const ENERGIES: Energy[] = ['calm', 'medium', 'high'];
const SETTINGS: Setting[] = ['car', 'table', 'outdoor', 'walking', 'bedtime', 'anywhere'];
const EQUIPMENT: Equipment[] = ['none', 'paper', 'cards', 'phone-timer'];
const SKILLS: Skill[] = ['memory', 'observation', 'verbal', 'logic', 'creativity', 'physical'];

function Pill<T extends string>({
  label,
  active,
  onClick,
}: {
  label: T;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
        active
          ? 'bg-stone-900 text-stone-50 border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100'
          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 dark:bg-stone-900 dark:text-stone-300 dark:border-stone-700 dark:hover:border-stone-500'
      }`}
    >
      {label}
    </button>
  );
}

export default function FilterBar({
  filters,
  setFilters,
  onReset,
  onRandom,
  resultCount,
}: Props) {
  const update = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    setFilters({ ...filters, [key]: value });

  const toggleSkill = (s: Skill) => {
    const has = filters.skills.includes(s);
    update('skills', has ? filters.skills.filter((x) => x !== s) : [...filters.skills, s]);
  };

  return (
    <div className="sticky top-0 z-30 -mx-4 px-4 pt-4 pb-3 bg-stone-50/85 dark:bg-stone-950/85 backdrop-blur-md border-b border-stone-200/70 dark:border-stone-800/70">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 items-center">
          <input
            type="search"
            placeholder="Search games…"
            value={filters.query}
            onChange={(e) => update('query', e.target.value)}
            className="flex-1 min-w-[180px] px-3 py-2 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:outline-none focus:border-amber-500"
          />

          <select
            value={filters.players ?? ''}
            onChange={(e) =>
              update('players', e.target.value ? Number(e.target.value) : null)
            }
            className="px-3 py-2 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700"
            aria-label="Player count"
          >
            <option value="">Any # players</option>
            {[2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
              <option key={n} value={n}>
                {n} players
              </option>
            ))}
          </select>

          <select
            value={filters.ageMax ?? ''}
            onChange={(e) =>
              update('ageMax', e.target.value ? Number(e.target.value) : null)
            }
            className="px-3 py-2 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700"
            aria-label="Youngest player age"
          >
            <option value="">Any age</option>
            {[8, 10, 12, 14, 16, 18, 21].map((n) => (
              <option key={n} value={n}>
                Kid-friendly {n}+
              </option>
            ))}
          </select>

          <button
            onClick={onRandom}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-amber-500 text-stone-900 hover:bg-amber-400 transition-colors"
            aria-label="Pick a random game respecting current filters"
          >
            Pick one for me
          </button>
          <button
            onClick={onReset}
            className="px-3 py-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            Reset
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <FilterGroup label="Energy">
            {ENERGIES.map((e) => (
              <Pill
                key={e}
                label={e}
                active={filters.energy === e}
                onClick={() => update('energy', filters.energy === e ? null : e)}
              />
            ))}
          </FilterGroup>

          <FilterGroup label="Setting">
            {SETTINGS.map((s) => (
              <Pill
                key={s}
                label={s}
                active={filters.setting === s}
                onClick={() => update('setting', filters.setting === s ? null : s)}
              />
            ))}
          </FilterGroup>

          <FilterGroup label="Gear">
            {EQUIPMENT.map((e) => (
              <Pill
                key={e}
                label={e}
                active={filters.equipment === e}
                onClick={() => update('equipment', filters.equipment === e ? null : e)}
              />
            ))}
          </FilterGroup>

          <FilterGroup label="Skills">
            {SKILLS.map((s) => (
              <Pill
                key={s}
                label={s}
                active={filters.skills.includes(s)}
                onClick={() => toggleSkill(s)}
              />
            ))}
          </FilterGroup>

          <div className="flex items-center gap-2 ml-auto">
            <label className="text-xs text-stone-500 dark:text-stone-400 whitespace-nowrap">
              Under {filters.durationMax} min
            </label>
            <input
              type="range"
              min={5}
              max={120}
              step={5}
              value={filters.durationMax}
              onChange={(e) => update('durationMax', Number(e.target.value))}
              className="w-32 accent-amber-500"
              aria-label="Maximum duration in minutes"
            />
          </div>
        </div>

        <div className="mt-2 text-xs text-stone-500 dark:text-stone-400">
          {resultCount} {resultCount === 1 ? 'game' : 'games'}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500 mr-1">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}
