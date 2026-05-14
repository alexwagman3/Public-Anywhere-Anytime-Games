# Contributing

Thank you for considering a contribution. The catalog is the product — every
game added or improved makes this more useful for the next stranger who lands
here looking for something to do with the people in front of them.

## Adding a game

1. **Fork & branch.** Branch name: `add-<game-id>`.
2. **Edit `src/data/games.ts`.** Append a new `Game` object to the `GAMES`
   array. Copy the shape of an existing entry — every field except `aliases`
   is required.
3. **Pick a stable `id`.** Kebab-case, unique, used in `?g=<id>` permalinks.
   Once it's merged, it should not change.
4. **Write the rules as Markdown.** Multi-paragraph. A stranger should be
   able to read it once and play. Headings (`### Setup`, `### How to play`,
   `### Tips`), bullet lists, and blockquotes are all supported by the
   modal renderer.
5. **Include sample prompts** when the game uses a deck (one-liners,
   either-ors, hypotheticals, etc.). 8–15 is usually enough to convey the
   flavor.
6. **Verify.** Run:
   ```bash
   npm run typecheck
   npm run build
   npm run dev   # then click into your new card
   ```
7. **Open a PR.** One game per PR. Title: `Add <game name>`.

## Editorial standards

- **Rules must be self-contained.** Don't say "play like Fishbowl, but…".
  Spell the whole thing out.
- **No real names.** Generic friends/family references only. The only
  exception is canonical content (e.g. F/M/K trios about public figures).
- **Mark adult content.** Drinking, dating, or 16+ themed games must use
  `age_min: 16` or `age_min: 21` and include `adult` in `tags`.
- **Be specific about gear.** "None" means literally nothing. Use
  `phone-timer` if a stopwatch is required. Use `paper` for "pen + scratch
  paper." Use `cards` only if a standard deck is required.
- **Estimate honestly.** `duration_minutes` is `[min, max]` for a single
  session, not the whole-night arc. `players_max: 99` means "scales
  unlimited."

## Improving an existing game

- **Clarity wins.** If a rule isn't clear, rewrite it. Send a PR.
- **Add aliases.** If the game is widely known by another name, append it.
- **Add sample prompts.** More variety is almost always welcome.
- **Tighten the `short_description`.** Aim for one sentence that earns the
  click.

## What we won't merge

- Games that require purchasable equipment (boards, dice, app-specific
  decks). This catalog is specifically about games that need nothing but
  people.
- Prompts that target a specific real person.
- Anything that makes the catalog meaner than it needs to be. Edge is fine.
  Cruelty isn't the point.

## Code contributions

Bug fixes, accessibility improvements, and UI refinements are welcome too.
Run `npm run typecheck` and `npm run build` before opening a PR. Keep
components small and prefer Tailwind over additional CSS.
