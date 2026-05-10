# Haladó Szoftvertechnológia — Felkészülő kvíz

Mobil-first kvíz app az ELTE **IPM-22AUTASTE 1 — Haladó Szoftvertechnológia** kurzus heti előadás-kérdéseiből (w38–w49).

## Funkciók

- **30 kérdés** magyar és angol nyelven (futás közben váltható)
- **Random sorrend** mind a kérdéseknél, mind a válasz-opcióknál minden indításnál
- **Élő pontszám** (jó ✓ / rossz ✗) a fejlécben
- **Magyarázat** minden válasz után — rossz válasznál a helyes opciót is kiemeli
- **Hibás válaszok átnézése** a kvíz végén
- **Legjobb eredmény** lokálisan tárolva (localStorage)
- **Gyors kör (10 kérdés)** opció — ha csak pár perced van
- **Telefonra optimalizálva** — nagy érintő-felületek, dark mode, PWA-ready

## Helyi futtatás

```bash
npm install
npm run dev
```

Aztán nyisd meg: <http://localhost:3000>

## Deploy Vercelre — 2 mód

### A) Vercel CLI (leggyorsabb)

```bash
npm i -g vercel       # ha még nincs
vercel                # interaktív, login után deploy
vercel --prod         # production deploy
```

A CLI első futtatáskor megkérdezi, hová deployolj — válassz default-okat. Pár másodperc múlva kapsz egy `https://<projekt>-<random>.vercel.app` URL-t.

### B) GitHub + Vercel dashboard

1. Készíts új GitHub repót (pl. `swtech-quiz`)
2. ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<USER>/swtech-quiz.git
   git push -u origin main
   ```
3. Menj a <https://vercel.com/new> oldalra → **Import** → válaszd ki a repót
4. Vercel auto-detektálja a Next.js-t, csak **Deploy** gomb. Kész.

Új commit pusholása → automatikus újra-deploy.

## Telefonra mentés (mint app)

Miután deployoltad és megnyitottad telefonon:

- **iOS Safari:** Share → "Add to Home Screen"
- **Android Chrome:** ⋮ menü → "Add to Home screen" / "Install app"

Így ikont kapsz a kezdőképernyőre, és teljes képernyőn futhat.

## Új kérdés hozzáadása

Szerkeszd: `app/data/questions.ts`. A `QUESTIONS` tömbbe vegyél fel egy új objektumot a meglévő séma szerint (id, week, topic, question, options, correctIndex, explanation). Minden mezőnek `hu` és `en` változata legyen.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Geist + Instrument Serif (Google Fonts via `next/font`)

## Jegyzet a rejtett válaszokról

Két kérdésnél (`w38_q2`, `w43_q2`) a Canvas elrejtette a helyes választ, mert a hallgató rosszul válaszolt. A `※` jellel jelölt kérdéseknél a helyes válasz az előadás-anyagok (`swtech_merged.pdf`) és a practice quiz alapján rekonstruált.

- **w38_q2 (PMF metrika):** "Rendszeresen visszatérő felhasználók száma." — retention-alapú, mérhető PMF-indikátor.
- **w43_q2 (MLOps automatizáció):** "Így a modell a célkörnyezetben is (újra)tanítható." — az előadás w43 explicit kimondja: *"Automatic (re)training in production + automatic deployment of new version."*

---

`MIT licensed. Tanulj jól.`
