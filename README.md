# Public, Anywhere, Anytime Games

A searchable catalog of games that need **nothing but people** — no boards, no
boxes, no batteries. Filter by who's with you, where you are, and how much
time you've got. Click any game for full rules.

> Games that need nothing but people.

![Screenshot](./public/og-image.png)

## Live demo

Deploy in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/alexwagman3/Public-Anywhere-Anytime-Games)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/alexwagman3/Public-Anywhere-Anytime-Games)
[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/alexwagman3/Public-Anywhere-Anytime-Games)

## Features

- **Fuzzy search** across names, aliases, tags, and rules (Fuse.js)
- **Sticky filter bar:** player count, age, energy, setting, equipment, skills, duration
- **"Pick one for me"** random picker that respects active filters
- **Shareable permalinks:** every game has a `?g=game-id` URL
- **Dark mode** with system-preference detection and manual toggle
- **Fully static** — deploys anywhere that serves files

## Tech stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- Fuse.js for fuzzy search

## Run locally

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # ./dist
npm run preview      # serve the production build
```

## Project layout

```
src/
  data/games.ts          # The catalog (single source of truth)
  types.ts               # Game type definition
  components/
    GameCard.tsx
    FilterBar.tsx
    GameModal.tsx        # Full rules + share button
  hooks/useFilters.ts
  App.tsx
public/
  og-image.png
```

## Add your own game

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full editorial guidelines.

The catalog lives in [`src/data/games.ts`](./src/data/games.ts). The short
version:

1. Fork the repo and create a branch.
2. Append a new `Game` object to the `GAMES` array. Use an existing entry as a
   template — every field is required except `aliases`.
3. Make sure the `id` is a unique kebab-case slug (used in permalinks).
4. The `rules` field is markdown — multi-paragraph instructions a stranger
   could read once and start playing. Include sample prompts when relevant.
5. Run `npm run typecheck` and `npm run build` to make sure the catalog still
   builds.
6. Open a PR describing the game in one line. Bonus: include a story about
   the worst time you ever played it.

### Game type

```ts
interface Game {
  id: string;
  name: string;
  aliases?: string[];
  short_description: string;            // one sentence
  rules: string;                        // markdown, multi-paragraph
  players_min: number;
  players_max: number;                  // 99 means unlimited
  age_min: number;
  duration_minutes: [number, number];   // [min, max]
  energy: 'calm' | 'medium' | 'high';
  setting: ('car' | 'table' | 'outdoor' | 'walking' | 'bedtime' | 'anywhere')[];
  equipment: 'none' | 'paper' | 'cards' | 'phone-timer';
  skills: ('memory' | 'observation' | 'verbal' | 'logic' | 'creativity' | 'physical')[];
  tags: string[];
}
```

### Editorial guidelines

- **Rules must be self-contained.** Don't reference rules from another game.
- **No real names.** Friends, family, public figures — keep prompts generic
  unless the public figure is canonical to the game (FMK).
- **Mark adult games.** Drinking, dating, or 16+ themed games need an
  `age_min` of 16 or 21 and an `adult` tag.
- **One game per PR.** Easier to review, easier to argue about.

## License

[MIT](./LICENSE) — do whatever you want with it.
