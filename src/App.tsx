import { useCallback, useEffect, useState } from 'react';
import { GAMES, GAMES_BY_ID } from './data/games';
import type { Game } from './types';
import { useFilters } from './hooks/useFilters';
import GameCard from './components/GameCard';
import FilterBar from './components/FilterBar';
import GameModal from './components/GameModal';

const THEME_KEY = 'paag.theme';

function applyTheme(theme: 'light' | 'dark') {
  if (theme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
}

function initialTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const { filters, setFilters, filtered, reset } = useFilters(GAMES);
  const [selected, setSelected] = useState<Game | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const t = initialTheme();
    applyTheme(t);
    return t;
  });

  // Permalink: ?g=<id> opens that game's modal.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('g');
    if (id && GAMES_BY_ID[id]) setSelected(GAMES_BY_ID[id]);
  }, []);

  // Reflect selected game in the URL.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (selected) url.searchParams.set('g', selected.id);
    else url.searchParams.delete('g');
    window.history.replaceState({}, '', url.toString());
  }, [selected]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  };

  const onRandom = useCallback(() => {
    if (!filtered.length) return;
    const pick = filtered[Math.floor(Math.random() * filtered.length)];
    setSelected(pick);
  }, [filtered]);

  return (
    <div className="min-h-screen">
      <header className="max-w-6xl mx-auto px-4 pt-12 sm:pt-20 pb-8 sm:pb-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400 mb-3">
              Public · Anywhere · Anytime
            </p>
            <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-stone-900 dark:text-stone-50 max-w-2xl">
              Games that need <em className="italic text-amber-700 dark:text-amber-400">nothing</em> but people.
            </h1>
            <p className="mt-5 max-w-xl text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed">
              A searchable catalog of conversation games, party classics, and
              quiet duos — no boards, no boxes, no batteries. Filter by who's
              with you, where you are, and how much time you've got.
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="shrink-0 w-10 h-10 grid place-items-center rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          onReset={reset}
          onRandom={onRandom}
          resultCount={filtered.length}
        />

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-stone-500 dark:text-stone-400">
            <p className="text-lg mb-2">No games match those filters.</p>
            <button
              onClick={reset}
              className="text-sm underline hover:text-stone-900 dark:hover:text-stone-100"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g) => (
              <GameCard key={g.id} game={g} onOpen={setSelected} />
            ))}
          </div>
        )}
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-10 border-t border-stone-200 dark:border-stone-800 text-sm text-stone-500 dark:text-stone-400">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>
            MIT licensed · Open source ·{' '}
            <a
              className="underline hover:text-stone-900 dark:hover:text-stone-100"
              href="https://github.com/alexwagman3/Public-Anywhere-Anytime-Games"
            >
              Contribute on GitHub
            </a>
          </p>
          <p className="text-xs">{GAMES.length} games and counting.</p>
        </div>
      </footer>

      {selected ? (
        <GameModal game={selected} onClose={() => setSelected(null)} />
      ) : null}
    </div>
  );
}
