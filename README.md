# TypeScript From Zero

**বাংলায় টাইপস্ক্রিপ্ট** — a complete TypeScript course in Bangla, with runnable exercises.

30 modules that start at `let` and `const` and finish at generics, classes and async/await. Every module has a concept explanation, a code example, an exercise you type yourself, and a quiz. The course page runs in any browser; the exercises run on your machine.

Nothing is assumed. If you have never written a line of JavaScript, start at module 1.

---

## Why this exists

There is a great deal of excellent TypeScript material in English, and very little in Bangla. For a lot of people that language gap is the thing standing between them and the language — not the difficulty of the language itself.

This course closes that gap. The explanations are in Bangla; the technical terms stay in English, because those are the words you will meet in the official docs, in error messages, and in interviews.

---

## Quick start

```bash
git clone https://github.com/cryptic91/TypeScript-from-Zero.git
cd TypeScript-from-Zero
npm install
```

Open `course.html` in your browser — just double-click it. No server needed.

Then run your first exercise:

```bash
npx tsx exercises/01-setup.ts
```

**Requirements:** [Node.js](https://nodejs.org) (LTS version) and a text editor. [VS Code](https://code.visualstudio.com) is recommended — it shows TypeScript errors as you type, which is half of what makes the language useful.

---

## How to use this

1. **Open `course.html`** and read the module — why it matters, the concept, the example.
2. **Copy the matching file from `exercises/` into `practice/`** and open it there. The task is in the comments at the top. Leave the original untouched.
3. **Type the solution yourself.** Do not copy the example. Typing is where the learning happens.
4. **Run it:** `npx tsx practice/04-type-inference.ts`
5. **Stuck?** The course page has a hint button before it has an answer button. Use them in that order.
6. **Take the quiz** on the course page. It targets the things people actually get wrong.
7. **Compare** with `solutions/` (and `practice/`) only after you have a working attempt of your own.

Progress is saved in your browser, so you can stop and come back. Modules are not dated — do one a week or six in an evening.

To check types across everything you have written:

```bash
npm run typecheck
```

---

## Course structure

| Part | Modules | What it covers |
|---|---|---|
| **ভিত্তি** (Foundations) | 1–10 | Setup, `let`/`const`, primitive types, type inference, operators, conditionals, loops, functions, arrow functions, scope |
| **ডেটা নিয়ে কাজ** (Working with data) | 11–16 | Arrays, `map`/`filter`/`find`/`reduce`, objects, destructuring, spread and rest, optional chaining and `??` |
| **TypeScript এর নিজস্ব অংশ** (TypeScript proper) | 17–23 | `interface` and `type`, union and literal types, optional and readonly, narrowing, `any` vs `unknown`, generics, utility types |
| **Async, Class আর প্রজেক্ট** | 24–30 | Promises, `async`/`await`, error handling, modules, classes, `tsconfig.json`, and a final project that uses everything |

The last module builds a small typed `OrderStore` class. Its shape is deliberately the same as a Page Object in test automation, so the step into Playwright or a real codebase is a short one.

---

## What's in the repo

```
course.html          The course — 30 modules, exercises and quizzes. Opens in any browser.
exercises/           One starter file per module. The task is in the header comment.
solutions/           Reference answers. Every one typechecks and runs.
practice/            A completed run through the course, kept as typed.
tsconfig.json        strict mode on, as it should be.
package.json         Just tsx and typescript.
```

Every solution in this repo passes `tsc --noEmit` under `strict: true` and runs without error. If you find one that does not, that is a bug — please open an issue.

---

## A note on `strict`

`tsconfig.json` ships with `"strict": true`, and you should leave it on.

Strict mode is where most of TypeScript's value lives: it catches `null` and `undefined` mistakes, and it refuses untyped function parameters. Beginners often turn it off because it produces a lot of errors at first. Those errors are the point. Turning it off means writing JavaScript with extra syntax.

---

## Where to go after this

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — the official reference. Use it to look things up, not to read front to back.
- [TypeScript Playground](https://www.typescriptlang.org/play) — try an idea in the browser with no setup.
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — for anything about the underlying language.
- [type-challenges](https://github.com/type-challenges/type-challenges) — puzzles, once generics feel comfortable.

---

## Two sets of answers

| Folder | What it holds |
|---|---|
| `solutions/` | The reference answer for each module — short, clean, written to be read. |
| `practice/` | A completed run through the course, kept as it was actually typed. Different variable names, extra `console.log` lines, the occasional second attempt. |

Every exercise has more than one correct answer. Comparing the two folders shows that directly: the same task, solved two ways, both passing `tsc --noEmit` under `strict`.

**Leave `exercises/` alone.** Those files are the blank starting point. Copy one into `practice/` and work there, so the templates stay usable:

```bash
# macOS / Linux
cp exercises/02-variables.ts practice/

# Windows PowerShell
Copy-Item exercises\02-variables.ts practice\
```

---

## Contributing

Corrections and clearer explanations are welcome, in Bangla or English:

- **Found an error?** Open an issue with the module number.
- **A translation reads awkwardly?** Open an issue — Bangla technical writing has few conventions and better wording helps everyone.
- **Want to add exercises?** Keep them small, one concept each, and make sure they pass `npm run typecheck`.

---

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, teach from it.
