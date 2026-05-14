import type { Game } from '../types';

// A curated catalog of games that need nothing but people.
// Each entry is self-contained: rules are written so a stranger could read
// them once and play immediately. Sample prompts are included for games
// that use them, so the catalog itself is playable.

export const GAMES: Game[] = [
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'would-you-rather',
    name: 'Would You Rather…?',
    aliases: ['Either Or', 'This or That'],
    short_description:
      'Impossible choices, no easy outs — pick one and defend it.',
    rules: `Read a prompt out loud. Everyone has to pick one of the two options — no abstaining, no inventing a third path. After everyone picks, go around the circle and explain *why*.

### How to play
1. One person reads a prompt aloud.
2. Everyone — including the reader — commits to an answer.
3. Reveal answers simultaneously, or one at a time around the circle.
4. Each person justifies their choice in a sentence or two.
5. Bonus points for the worst, weirdest, or most contrarian justification.

### Tips
- The best prompts have two genuinely bad (or genuinely good) options.
- Don't let anyone weasel out with "it depends."
- Follow-up questions are encouraged — "what about with your boss?"

### Sample prompts
- Would you rather have an extra $2,000 a month, or an extra two hours a day?
- Would you rather always be ten minutes late or always be 20 minutes early?
- Would you rather smile when bad things happen or frown when good things happen?
- Would you rather be famous when you are alive and forgotten when you die, or unknown when you are alive but famous after you die?
- Would you rather never use social media apps again or never watch another movie or TV show?
- Would you rather have one wish granted today or three wishes granted in 10 years?
- Would you rather be gossiped about or never talked about at all?
- Would you rather control the emotions of those around you or control the weather?
- Would you rather lose everything you own that's in your room or lose every photo you've ever taken?
- Would you rather speak everything in surround sound or have your own entrance theme song when you walk into a room?`,
    players_min: 2,
    players_max: 99,
    age_min: 10,
    duration_minutes: [5, 60],
    energy: 'calm',
    setting: ['car', 'table', 'walking', 'anywhere'],
    equipment: 'none',
    skills: ['verbal', 'creativity', 'logic'],
    tags: ['conversation', 'icebreaker', 'road-trip', 'classic'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'debate',
    name: 'Debate',
    aliases: ['Pick a Side', 'Devil\'s Advocate'],
    short_description:
      'Take a side. Defend it like you mean it. A judge picks the winner.',
    rules: `Two players take opposing sides on a prompt. A third person acts as judge. The judge picks a winner based on whoever made the more compelling case — not whoever they personally agree with.

### How to play
1. Pick a prompt. One player argues *for*, the other *against*.
2. Each side gets ~60 seconds of opening argument.
3. ~30 seconds of cross-examination per side.
4. ~30 seconds of closing.
5. The judge declares a winner and explains why.

### Tips
- Force people to argue the side they *don't* agree with. It's harder and funnier.
- The judge should care about argument quality, not vibes.
- Works great while walking — the rhythm of movement helps the flow.

### Sample prompts
- Should parents have the right to refuse vaccinations for their children?
- When dining out in a group, should the bill be split equally, or should each person pay only for what they ordered?
- Is it ever wrong to charge interest when lending money to friends or family?
- Should attending family events be a couple's obligation, or fine to skip alone?
- At what point should you tell a friend you think they've gained too much weight?
- Should we always attend family events together, or is solo skipping okay?
- Should wedding costs fall on the bride's family, both families, or the couple themselves?`,
    players_min: 3,
    players_max: 8,
    age_min: 12,
    duration_minutes: [10, 60],
    energy: 'medium',
    setting: ['table', 'walking', 'outdoor', 'anywhere'],
    equipment: 'none',
    skills: ['verbal', 'logic'],
    tags: ['conversation', 'argument', 'thinking'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'super-theticals',
    name: 'Super-theticals',
    aliases: ['Hypotheticals', 'Thought Experiments'],
    short_description:
      'Long-form hypotheticals that actually make you think.',
    rules: `One player reads a long, fully-staged hypothetical aloud. There's no time pressure — these are the kind of questions that should haunt the rest of the night.

### How to play
1. Read the scenario slowly. Don't skim.
2. Give everyone a minute of silence to think before anyone answers.
3. Go around in order. Each person commits to a specific answer before discussing.
4. Then open it up. Ask follow-ups. Push on edge cases.
5. The goal is depth, not winning.

### Tips
- These work best late at night, on a porch, or in a quiet car.
- Resist the urge to abstract — make people pick a concrete action.
- One prompt can easily fill an hour.

### Sample prompt
> Name a person you have known well, but not intimately, for at least two years. Now imagine that, in an unexpected turn of events, you discover that this person is not who they say they are. They have changed their name, the city they claim as their hometown is not where they are from, and almost everything they have told you about their past is untrue. You privately confront them about your findings, and after a few unconvincing denials, they confess. You ask them why they lied and they begin to cry. They beg you not to tell anyone else and offer you five thousand dollars in cash to keep their secret and ask no further questions. You would still interact with them on a fairly regular basis, but you would be the only person in your social sphere who knows they're constantly lying about who they are. **What do you do?**

### Another
> Imagine a stranger approaches you in a public park. They tell you they have traveled back from the distant future, and that you should dedicate your life to mathematics, because the work you will eventually do will positively change the future of humankind. You ask for proof. They say they cannot give you any direct information without rippling reality, but they offer one prediction: "Tomorrow, a strange thing will happen to a public official that will prove my claims." The next day, you learn that the governor of your state was killed and eaten by a bear inside the state capitol building. **Is this enough to convince you to devote your life to thinking about math?**`,
    players_min: 2,
    players_max: 8,
    age_min: 14,
    duration_minutes: [20, 120],
    energy: 'calm',
    setting: ['table', 'bedtime', 'outdoor', 'car'],
    equipment: 'none',
    skills: ['verbal', 'logic', 'creativity'],
    tags: ['conversation', 'philosophy', 'deep', 'late-night'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'campfire-stories',
    name: 'Campfire Stories',
    short_description:
      'Reignite an old memory. The longer the story, the better.',
    rules: `Go around the circle. Each person tells a true story tied to the prompt. Longer is better — these aren't anecdotes, they're stories.

### How to play
1. Read a prompt aloud.
2. Whoever feels something stir, goes first.
3. Tell the whole thing — setup, escalation, ending.
4. The next person picks up with their own story tied to the same prompt, or rolls a new one.
5. No rush. No "you had to be there." Make us be there.

### Tips
- Best around a fire (real or imagined), in the dark, or late at night.
- Don't interrupt mid-story. Hold questions for the end.
- It's fine if a story takes ten minutes. That's the point.

### Sample prompts
- The closest you've come to being seriously hurt.
- A time you got away with something you shouldn't have.
- The most you've ever been embarrassed in front of strangers.
- A small lie you told that spiraled.
- The strangest thing you've ever seen with your own eyes that you can't fully explain.
- A time you were absolutely certain you were right, and turned out to be absolutely wrong.
- The last time you cried, and what set you off.
- An act of kindness from a stranger you still think about.
- A time you scared yourself.
- The best meal of your life.`,
    players_min: 2,
    players_max: 12,
    age_min: 12,
    duration_minutes: [20, 120],
    energy: 'calm',
    setting: ['outdoor', 'bedtime', 'table'],
    equipment: 'none',
    skills: ['verbal', 'memory', 'creativity'],
    tags: ['conversation', 'storytelling', 'campfire', 'nostalgia'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'lightning-fill-in-the-blank',
    name: 'Lightning Fill in the Blank',
    aliases: ['Name Three', 'Speed List'],
    short_description: 'Five seconds. Three answers. Go.',
    rules: `For each prompt, you have five seconds to name three things that fit. Hesitate and you lose the round.

### How to play
1. Designate a reader and start a five-second timer on a phone.
2. The reader names a category — e.g. "name three things in a bathroom."
3. The first player must shout three answers before the timer ends.
4. Score one point per round survived. Lose a round, pass to the next player.
5. First to ten points wins. Or just play until everyone's voice gives out.

### Tips
- The reader should escalate from easy to brutal.
- Repeats from prior rounds disqualify the answer.
- Group answers ("colors of the rainbow") count as one, not three.

### Sample prompts
- Name three things you'd find in a desk drawer.
- Name three reasons to call out of work.
- Name three things that smell good in a kitchen.
- Name three excuses for being late.
- Name three things you do when no one's watching.
- Name three boring superpowers.
- Name three things you'd never wear in public.
- Name three sounds that make you angry.
- Name three things a vampire could be afraid of.
- Name three terrible names for a band.`,
    players_min: 2,
    players_max: 99,
    age_min: 8,
    duration_minutes: [5, 30],
    energy: 'high',
    setting: ['table', 'car', 'anywhere'],
    equipment: 'phone-timer',
    skills: ['verbal', 'creativity'],
    tags: ['fast', 'party', 'speed', 'shouting'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'make-it-or-break-it',
    name: 'Make It Or Break It?',
    aliases: ['Dealbreaker'],
    short_description:
      'Your perfect partner — except for one specific, weird thing.',
    rules: `Read a description of a hypothetical partner: perfect in every way *except* for one trait. Decide if you could actually live with it.

### How to play
1. Reader describes the partner and the dealbreaker.
2. Each player says "Make It" or "Break It" and explains.
3. Argue, push back, expose hypocrisy.
4. The reader rotates each round.

### Tips
- The trait should be specific and unflinching — not "is rude," but "always corrects your grammar at parties."
- Force people off the fence. "It depends" isn't an answer.
- Use it as a window: the dealbreakers reveal more than the answers.

### Sample prompts
- Perfect partner — except they cry at every commercial, every time.
- Perfect partner — except they have a foot-long ponytail of nostril hair they refuse to trim.
- Perfect partner — except they insist on narrating their dreams to you every morning for at least 20 minutes.
- Perfect partner — except they're 25 years older than you and bring it up constantly.
- Perfect partner — except they laugh exactly like the witch in *The Wizard of Oz*.
- Perfect partner — except they collect ventriloquist dummies and keep them on the bed.
- Perfect partner — except they refuse to ever travel more than 50 miles from where they were born.
- Perfect partner — except their entire family hates you and they will never push back.
- Perfect partner — except they sleep with their eyes wide open.`,
    players_min: 2,
    players_max: 10,
    age_min: 14,
    duration_minutes: [10, 45],
    energy: 'medium',
    setting: ['table', 'car', 'walking', 'anywhere'],
    equipment: 'none',
    skills: ['verbal', 'creativity'],
    tags: ['conversation', 'dating', 'absurd', 'party'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'seven-second-summaries',
    name: '7-Second Summaries',
    aliases: ['Speed Movie', 'Describe That Movie'],
    short_description: 'Describe the movie. Seven seconds. No title.',
    rules: `One player gets seven seconds to describe a movie well enough for their partner to guess it. No titles, no actor names, no direct character names.

### How to play
1. Split into teams of two (or pairs in a larger group).
2. Picker shows the describer a movie title, then starts a 7-second timer.
3. Describer talks, partner guesses.
4. Right answer before time = one point. Otherwise, pass.
5. Five rounds per pair. Most points wins.

### Tips
- Banned: title, lead actor name, lead character name. Genre and plot are fair game.
- Saying "uh" wastes precious seconds. Get to the verbs.
- If you can't think of a movie, name the year and the box-office vibe.

### Sample movies
- The Shawshank Redemption
- Jurassic Park
- The Princess Bride
- Forrest Gump
- The Matrix
- Titanic
- Jaws
- The Sixth Sense
- Mean Girls
- Get Out
- The Truman Show
- Whiplash
- Inception
- Citizen Kane
- The Blair Witch Project`,
    players_min: 2,
    players_max: 12,
    age_min: 10,
    duration_minutes: [10, 30],
    energy: 'high',
    setting: ['table', 'anywhere'],
    equipment: 'phone-timer',
    skills: ['verbal', 'creativity', 'memory'],
    tags: ['party', 'movies', 'speed', 'teams'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'fmk',
    name: 'F / M / K',
    aliases: ['Marry Boff Kill', 'Smash Marry Pass'],
    short_description:
      'Three options. Three fates. Pick one for each. Defend yourself.',
    rules: `Out of three options, decide which one you'd *f***, which you'd *marry*, and which you'd *kill*. Compare answers and justify.

### How to play
1. Read the three options aloud.
2. Everyone privately decides their assignments.
3. Reveal one at a time. Defend your picks.
4. Same option can't be repeated — every player has to assign each of the three categories exactly once.

### Tips
- The fun is in non-people categories: cereals, sitcoms, presidents, cars.
- Disagreements over the same option are where this game lives.
- A 16+ vibe — phrase it as "Marry / Boff / Pass" with younger groups.

### Sample trios
- Canada / USA / Mexico
- McDonald's / Wendy's / Burger King
- Facebook / Instagram / Snapchat
- Cream Cheese / Kraft Singles / String Cheese
- History Teacher / Science Teacher / Gym Coach
- Spaghetti / Tacos / Pizza
- Mansion / Cabin in the Woods / Lakehouse
- Gollum / Voldemort / The Joker
- Homer Simpson / Peter Griffin / Fred Flintstone
- Tony the Tiger / Lucky the Leprechaun / Cap'n Crunch`,
    players_min: 2,
    players_max: 10,
    age_min: 16,
    duration_minutes: [5, 30],
    energy: 'medium',
    setting: ['table', 'car', 'anywhere'],
    equipment: 'none',
    skills: ['verbal', 'creativity'],
    tags: ['party', 'adult', 'comparison'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'game-of-things',
    name: 'Game of Things',
    aliases: ['Things…'],
    short_description: 'Write something funny. Try to stay anonymous.',
    rules: `Everyone — including the reader — writes their answer to the prompt on a slip of paper, folds it, and hands it in. The reader reads them all aloud. Then players take turns guessing who wrote what.

### How to play
1. Reader reads the prompt: "Things you'd never say in a job interview…"
2. Everyone writes one answer on a slip and folds it.
3. The reader reads every slip aloud — at least twice, with a straight face.
4. Going clockwise, the player to the reader's left picks any slip and guesses who wrote it.
5. **Correct guess:** the writer is out of the round and reveals themselves. The guesser keeps guessing.
6. **Wrong guess:** turn passes to the next player.
7. The last writer standing wins the round.

### Tips
- Disguise your handwriting. Disguise your *voice* in your answer.
- "Just funny enough to laugh, not so funny it's obviously you."
- Pencil + scratch paper works fine. A small notepad is even better.

### Sample prompts
- Things you wish you could buy out of vending machines.
- Things that would get you fired.
- Things you wish you could do in your sleep.
- Things you'd do if you were a dictator.
- Things you know nothing about.
- Things people whisper at funerals.
- Things you'd find in a haunted house.
- Things you'd never put on a résumé.
- Things you'd want banned from weddings.
- Things to yell instead of "fore!" on a golf course.`,
    players_min: 4,
    players_max: 12,
    age_min: 12,
    duration_minutes: [20, 60],
    energy: 'medium',
    setting: ['table'],
    equipment: 'paper',
    skills: ['verbal', 'creativity', 'observation'],
    tags: ['party', 'writing', 'group', 'classic'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'most-likely-to',
    name: 'Most Likely To',
    short_description: 'Three… two… one… point. Most votes has to explain.',
    rules: `Read a prompt. Everyone counts down from three and points at the person they think is most likely. Most votes has to confirm or deny — and explain themselves.

### How to play
1. One person reads a prompt.
2. Everyone simultaneously counts "three… two… one… point!"
3. On *point*, everyone points at one player.
4. Whoever got the most fingers explains why they did, or vehemently didn't.
5. Ties get a runoff vote between the tied players.

### Tips
- The fun is in being unanimously pointed at without warning.
- The reader rotates each round so they're not always a target.
- It's fine to point at yourself — sometimes mandatory.

### Sample prompts
Who is most likely to…
- clap at the end of a movie or plane flight
- get into an argument about politics
- believe in conspiracy theories
- date two people at once
- end up on a reality show
- become a celebrity
- win the Nobel prize
- forget where they parked their car
- be the first one to die in a zombie apocalypse
- show up on your doorstep with soup when you're sick
- request a nonconventional funeral
- accidentally end up in a cult
- text "on my way" when they're still getting ready
- pretend to know the lyrics to a song
- take the last piece of pizza without asking`,
    players_min: 3,
    players_max: 12,
    age_min: 12,
    duration_minutes: [10, 45],
    energy: 'medium',
    setting: ['table', 'outdoor', 'anywhere'],
    equipment: 'none',
    skills: ['verbal', 'observation'],
    tags: ['party', 'group', 'voting'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'fishbowl',
    name: 'Fishbowl',
    aliases: ['Celebrities', 'Salad Bowl'],
    short_description:
      'Three rounds, one bowl of words. Words, then charades, then one-word clues.',
    rules: `A team game played in three rounds with the same set of clues. Each round, the rules get harder — but you've already heard every word, so memory carries you through.

### Setup
- Each player writes 4 words or short phrases (a person, place, or thing) on separate slips and folds them into the bowl.
- Split into two teams. Sit in an alternating circle.

### Round 1 — Describe
- A player has 30 seconds to draw slips and get teammates to guess the word using *any* spoken clues. Skip allowed but costs a slip.
- Continue around the circle until the bowl is empty. Tally points.
- **Refill the bowl with the same slips.**

### Round 2 — Charades
- Same slips, same 30 seconds — but no talking. Only acting.

### Round 3 — One word
- Same slips again. You may say *one single word* to convey the slip. Then teammates have one guess.

### Tips
- Round 1 establishes the word-memory; Rounds 2 and 3 reward attention.
- Pick clues that are *gettable* — not "the smell of October rain." Aim for nameable people and things.
- Cap your hardest clue at one per player.

Most cumulative points after Round 3 wins.`,
    players_min: 4,
    players_max: 16,
    age_min: 10,
    duration_minutes: [30, 90],
    energy: 'high',
    setting: ['table'],
    equipment: 'paper',
    skills: ['verbal', 'memory', 'observation', 'physical'],
    tags: ['party', 'teams', 'classic', 'group'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'wits-and-wagers',
    name: 'Wits & Wagers',
    aliases: ['Closest Guess'],
    short_description:
      'A trivia game for people who don\'t know the answer either.',
    rules: `Ask a question nobody knows the exact answer to, but that *has* a quantifiable answer. Everyone guesses. Closest guess wins the round.

### How to play
1. The reader poses a question with a real, numeric answer — and they should look it up first to confirm.
2. Everyone writes their guess on a slip.
3. Reveal all guesses at once and lay them in order on the table.
4. Reader reveals the true answer.
5. Closest guess (without going over, if you want to add that rule) wins the point.

### Tips
- The best questions sound answerable but aren't. Lengths, weights, counts, dates.
- Confidence betting: each player can bet 1–3 points on their own guess. Risky guess, bigger reward.
- For groups, write guesses simultaneously so no one anchors on someone else's.

### Sample questions
- In hours and minutes, what is the combined length of the three *Lord of the Rings* theatrical films?
- How many bones are in an adult human body?
- What year was the bicycle invented?
- How many countries border China?
- What is the world record for hot dogs eaten in ten minutes?
- How many keys are on a standard piano?
- In feet, how tall is the Statue of Liberty from heel to torch tip?
- How many seconds in a leap year?`,
    players_min: 3,
    players_max: 10,
    age_min: 10,
    duration_minutes: [15, 45],
    energy: 'calm',
    setting: ['table', 'car', 'anywhere'],
    equipment: 'paper',
    skills: ['logic', 'memory'],
    tags: ['trivia', 'guessing', 'family'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'mind-reader',
    name: 'Mind Reader',
    aliases: ['Convergence', 'Word Sync'],
    short_description:
      'Two random words. Find the third word in between. Then the next. Meet in the middle.',
    rules: `Two players try to converge on the *same word* by saying one word at a time. The goal is to find the conceptual middle between whatever was said last.

### How to play
1. On a count of three, both players say a random word out loud. ("Travel" / "Book")
2. On the next count of three, both say a new word, trying to find a connector between the previous two. ("Vacation" / "Library" — or both might land on "Reading")
3. Keep counting and guessing until you both say the *same word at the same time*.
4. **No word can be repeated** during the round.

### Tips
- Play in groups by rotating pairs in a circle — winners stay on.
- Resist saying obvious synonyms; aim for the conceptual middle.
- Surprisingly hard. Most rounds last 4–8 exchanges.

### Variants
- **Race mode:** First pair to converge wins. Best with three or more pairs.
- **Telephone Convergence:** Pass to a new partner each turn. Try to converge with the latest partner.`,
    players_min: 2,
    players_max: 12,
    age_min: 8,
    duration_minutes: [5, 30],
    energy: 'calm',
    setting: ['car', 'walking', 'table', 'bedtime', 'anywhere'],
    equipment: 'none',
    skills: ['verbal', 'creativity', 'logic'],
    tags: ['quiet', 'duo', 'travel', 'thoughtful'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: '90-second-rambler',
    name: '90-Second Rambler',
    aliases: ['Just a Minute'],
    short_description:
      'Talk about a topic for 90 seconds. No repeats, no pauses, no grammar slips.',
    rules: `One player draws a topic and must talk about it continuously for 90 seconds — *without* repeating themselves, hesitating, or making serious grammatical errors.

### Setup
- Everyone writes down a few subjects on slips: ordinary ("breakfast cereals"), absurd ("the inner life of a pigeon"), philosophical ("what it's like to be alive"), or specific ("the time you got food poisoning").
- Fold them into a hat. Set a 90-second timer.

### How to play
1. The rambler draws a topic. The next player clockwise is the judge.
2. Start the timer. The rambler launches in.
3. The judge can call **"Repeat!"**, **"Hesitate!"**, or **"Foul!"** and steal the remainder of the time on the same topic.
4. Survive 90 seconds = one point. Steal someone's clock and survive = one point.

### Tips
- Tangents are not repeats. Saying "the" multiple times is not a repeat. Saying "delicious" twice *is*.
- A long pause is a hesitation. So is "uhhh."
- The more specific or weird the prompt, the better the comedy.

### Sample topics
- Bowel movements
- The history of cutlery
- Why my next-door neighbor avoids me
- The proper way to eat a banana
- What dogs probably think about
- Things that should be illegal but aren't
- My theory on left-handed people`,
    players_min: 3,
    players_max: 10,
    age_min: 12,
    duration_minutes: [15, 45],
    energy: 'medium',
    setting: ['table', 'outdoor', 'anywhere'],
    equipment: 'phone-timer',
    skills: ['verbal', 'creativity', 'memory'],
    tags: ['party', 'improv', 'speed', 'comedy'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'what-are-the-odds',
    name: 'What Are the Odds?',
    aliases: ['Odds Are'],
    short_description:
      'Dare someone. Pick odds. Match numbers and they have to do it.',
    rules: `At any point, you can issue a dare. The other player picks the odds. On a count of three, you both say a number. Match — they do the dare. Miss — and the roles can flip.

### How to play
1. Approach a player: *"What are the odds that you'll…?"* (kiss that stranger, eat the wasabi, sing to the waiter, etc.)
2. They name the odds: anywhere from **1 in 3** to **1 in 1,000**. Lower number = riskier.
3. On the count of three, you both say a number between 1 and X inclusive.
4. **Same number:** they have to do the dare.
5. **Different numbers:** done. (Or: house rule — roles reverse, and *you* now face the dare at the same odds.)

### Tips
- Refusing a fair dare bans the refuser from daring others for the rest of the night.
- Lower odds → bigger dare. Don't ask "1 in 3" for "say hi to the bartender."
- Surprisingly low-stakes feeling, surprisingly high-stakes outcomes.

This works anywhere: at a bar, on a road trip, at a wedding. You're never not playing.`,
    players_min: 2,
    players_max: 8,
    age_min: 16,
    duration_minutes: [1, 60],
    energy: 'high',
    setting: ['outdoor', 'walking', 'anywhere'],
    equipment: 'none',
    skills: ['physical', 'creativity', 'verbal'],
    tags: ['dare', 'party', 'adult', 'public'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'kings-cup',
    name: "King's Cup",
    aliases: ['Ring of Fire', 'Circle of Death'],
    short_description:
      'A drinking game built around the deck. One pile, many rules.',
    rules: `Adult game. Spread a deck of cards face-down around a central glass. Each player takes turns drawing one card. The card dictates the rule.

### Setup
- One deck of cards, one large central glass ("the king's cup"), drinks of your choice.
- Arrange cards face-down in a ring around the central glass.

### How to play
Going clockwise, draw one card. Each card has an action. A common standard:

- **A — Waterfall.** Everyone drinks continuously. You can stop when the player to your right stops. The drawer stops whenever they like.
- **2 — You.** Pick someone to drink.
- **3 — Me.** You drink.
- **4 — Floor.** Last person to touch the floor drinks.
- **5 — Guys.** All guys drink. (Or pick any group — "everyone wearing black.")
- **6 — Chicks.** All women drink.
- **7 — Heaven.** Last person to point at the ceiling drinks.
- **8 — Mate.** Pick a drinking buddy — they drink whenever you do until the next 8.
- **9 — Rhyme.** Say a word. Next player rhymes. Loop until someone fails or repeats.
- **10 — Category.** Pick a category (cereals, breeds of dog). Loop until someone fails.
- **J — Never Have I Ever.** Hold up three fingers. Go around. Anyone who's done it puts one down. Last finger out drinks.
- **Q — Question Master.** Until the next Queen, anyone who answers a question from the Q-master has to drink.
- **K — King's Cup.** Pour some of your drink into the central glass. Whoever draws the *fourth* King has to drink it.

### Tips
- Pace yourselves. The fourth King is a real moment.
- Rules can be made up at the table — house rules are the soul of this game.
- Water counts. Take care of each other.

*Adults only. Drink responsibly, or skip the alcohol entirely and play with snacks.*`,
    players_min: 4,
    players_max: 10,
    age_min: 21,
    duration_minutes: [30, 120],
    energy: 'high',
    setting: ['table'],
    equipment: 'cards',
    skills: ['memory', 'verbal'],
    tags: ['drinking', 'adult', 'party', 'classic'],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'cheers-to-the-governor',
    name: 'Cheers to the Governor',
    short_description:
      'Count to 21. Skip 7 and 11. Whoever lands 21 makes a new rule.',
    rules: `Everyone sits in a circle and counts together to 21, one number per person, going clockwise. The numbers 7 and 11 are swapped — when you'd say *7*, you say *11* (and vice versa). Instead of saying *21*, the player whose turn it is shouts **"Cheers to the Governor!"** and everyone drinks.

### How to play
1. Player 1 says "one." Player 2 says "two." And so on, clockwise.
2. When the count hits 7: swap with 11. When it hits 11: swap with 7.
3. When the count hits 21, the player whose turn it is yells *"Cheers to the Governor!"* — and everyone drinks.
4. That player invents a new rule. Examples:
   - "Instead of saying *3*, you pick someone to drink."
   - "Every odd number is said in a British accent."
   - "Every multiple of 4 must be said as a number from another language."
5. The next player starts over at 1. **All previous rules stack.**
6. Mess up any rule? You drink, and the count resets to 1.

### Tips
- Once you have 4–5 stacked rules, this gets brutal in the best way.
- New rules should be specific and survivable. "Replace 13 with a duck noise" is a classic.
- Skip the alcohol and play with M&Ms or pushups — the structure is the fun.

*Adults only when played with alcohol.*`,
    players_min: 4,
    players_max: 10,
    age_min: 21,
    duration_minutes: [15, 60],
    energy: 'high',
    setting: ['table', 'outdoor'],
    equipment: 'none',
    skills: ['memory', 'verbal', 'observation'],
    tags: ['drinking', 'adult', 'party', 'counting'],
  },
];

// Stable id → game lookup for permalinks.
export const GAMES_BY_ID: Record<string, Game> = Object.fromEntries(
  GAMES.map((g) => [g.id, g]),
);
