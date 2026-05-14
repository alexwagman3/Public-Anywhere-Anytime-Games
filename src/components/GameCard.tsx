import type { Game } from '../types';

interface Props {
  game: Game;
  onOpen: (g: Game) => void;
}

const energyDot: Record<Game['energy'], string> = {
  calm: 'bg-emerald-400',
  medium: 'bg-amber-400',
  high: 'bg-rose-400',
};

const equipmentLabel: Record<Game['equipment'], string> = {
  none: 'Nothing',
  paper: 'Paper + pen',
  cards: 'Deck of cards',
  'phone-timer': 'Phone timer',
};

function playerLabel(min: number, max: number): string {
  if (max >= 99) return `${min}+`;
  if (min === max) return `${min}`;
  return `${min}–${max}`;
}

function durationLabel([min, max]: [number, number]): string {
  if (min === max) return `${min} min`;
  return `${min}–${max} min`;
}

export default function GameCard({ game, onOpen }: Props) {
  return (
    <button
      onClick={() => onOpen(game)}
      className="group relative text-left flex flex-col h-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/60"
    >
      <div className="flex items-center justify-between gap-3 mb-1">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
          <span className={`w-1.5 h-1.5 rounded-full ${energyDot[game.energy]}`} />
          {game.energy}
        </span>
        <span className="text-xs text-stone-500 dark:text-stone-400">
          {equipmentLabel[game.equipment]}
        </span>
      </div>

      <h3 className="font-display text-2xl leading-tight text-stone-900 dark:text-stone-50 mb-1.5">
        {game.name}
      </h3>

      <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 line-clamp-3">
        {game.short_description}
      </p>

      <div className="mt-auto grid grid-cols-3 gap-2 text-xs text-stone-600 dark:text-stone-400">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500">Players</div>
          <div className="font-medium text-stone-800 dark:text-stone-200">
            {playerLabel(game.players_min, game.players_max)}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500">Age</div>
          <div className="font-medium text-stone-800 dark:text-stone-200">{game.age_min}+</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500">Time</div>
          <div className="font-medium text-stone-800 dark:text-stone-200">
            {durationLabel(game.duration_minutes)}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {game.setting.slice(0, 3).map((s) => (
          <span
            key={s}
            className="text-[11px] px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
          >
            {s}
          </span>
        ))}
      </div>
    </button>
  );
}
