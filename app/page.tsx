"use client";

import { useEffect, useMemo, useState } from "react";
import { QUESTIONS, Question, shuffle, type Lang } from "./data/questions";

type Phase = "intro" | "playing" | "review" | "done";

interface AnswerRecord {
  questionId: string;
  pickedIndex: number;
  correct: boolean;
}

const STORAGE_KEY = "swtech-quiz:bestScore";
const LANG_KEY = "swtech-quiz:lang";

export default function QuizPage() {
  const [lang, setLang] = useState<Lang>("hu");
  const [phase, setPhase] = useState<Phase>("intro");
  const [order, setOrder] = useState<Question[]>([]);
  const [optionsOrder, setOptionsOrder] = useState<number[][]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [bestScore, setBestScore] = useState<number | null>(null);

  // Hydrate persisted state on mount (client-only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setBestScore(parseInt(saved, 10));
      const savedLang = localStorage.getItem(LANG_KEY) as Lang | null;
      if (savedLang === "hu" || savedLang === "en") setLang(savedLang);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {}
  }, [lang]);

  const score = answers.filter((a) => a.correct).length;
  const wrongCount = answers.filter((a) => !a.correct).length;
  const total = order.length || QUESTIONS.length;
  const current = order[idx];
  const currentOptionsOrder = optionsOrder[idx] ?? [];
  const correctShuffledIndex = currentOptionsOrder.indexOf(
    current?.correctIndex ?? -1,
  );

  function startQuiz(count?: number) {
    const all = shuffle(QUESTIONS);
    const subset = count ? all.slice(0, count) : all;
    setOrder(subset);
    // Pre-shuffle answer options for each question
    setOptionsOrder(subset.map((q) => shuffle(q.options.hu.map((_, i) => i))));
    setIdx(0);
    setPicked(null);
    setAnswers([]);
    setPhase("playing");
  }

  function handlePick(shuffledOptionIdx: number) {
    if (picked !== null) return;
    const realOptionIdx = currentOptionsOrder[shuffledOptionIdx];
    const correct = realOptionIdx === current.correctIndex;
    setPicked(shuffledOptionIdx);
    setAnswers((prev) => [
      ...prev,
      { questionId: current.id, pickedIndex: realOptionIdx, correct },
    ]);
    setPhase("review");
  }

  function next() {
    if (idx + 1 < order.length) {
      setIdx(idx + 1);
      setPicked(null);
      setPhase("playing");
    } else {
      // Save best score
      const finalScore = answers.filter((a) => a.correct).length;
      try {
        const prev = localStorage.getItem(STORAGE_KEY);
        const prevNum = prev ? parseInt(prev, 10) : -1;
        const pct = Math.round((finalScore / order.length) * 100);
        if (pct > prevNum) {
          localStorage.setItem(STORAGE_KEY, String(pct));
          setBestScore(pct);
        }
      } catch {}
      setPhase("done");
    }
  }

  function restart() {
    setPhase("intro");
    setOrder([]);
    setOptionsOrder([]);
    setIdx(0);
    setPicked(null);
    setAnswers([]);
  }

  const t = useMemo(() => translations[lang], [lang]);

  // ─────────────────── INTRO ───────────────────
  if (phase === "intro") {
    return (
      <main className="relative min-h-dvh flex items-center justify-center px-5 py-10">
        <div className="max-w-md w-full animate-fade-up">
          <div className="text-xs uppercase tracking-[0.25em] text-ink-200/70 font-mono mb-3">
            ELTE · IPM-22AUTASTE
          </div>
          {lang === "hu" ? (
            <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] text-ink-50">
              Haladó{" "}
              <em className="text-amber-accent not-italic font-display">
                szoftver-
              </em>
              <br />
              <em className="italic">technológia</em>
            </h1>
          ) : (
            <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] text-ink-50">
              Advanced{" "}
              <em className="text-amber-accent not-italic font-display">
                Software
              </em>
              <br />
              <em className="italic">Technology</em>
            </h1>
          )}
          <p className="mt-5 text-ink-200 text-base leading-relaxed">
            {t.intro}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-2 text-sm font-mono">
            <Stat label={t.stat_questions} value={String(QUESTIONS.length)} />
            <Stat label={t.stat_weeks} value="w01, w38–w50" />
            <Stat
              label={t.stat_best}
              value={bestScore !== null ? `${bestScore}%` : "—"}
            />
            <Stat label={t.stat_lang} value={lang.toUpperCase()} />
          </div>

          <div className="mt-7 flex gap-2 text-xs font-mono">
            <button
              onClick={() => setLang(lang === "hu" ? "en" : "hu")}
              className="px-3 py-2 border border-ink-200/20 rounded-md text-ink-200 hover:text-amber-accent hover:border-amber-accent transition"
            >
              ↔ {lang === "hu" ? "Switch to English" : "Váltás magyarra"}
            </button>
          </div>

          <div className="mt-5 space-y-2.5">
            <button
              onClick={() => startQuiz()}
              className="w-full px-6 py-4 bg-amber-accent text-navy-900 font-semibold rounded-xl text-base shadow-glow hover:brightness-110 active:scale-[0.98] transition"
            >
              {t.btn_full} →
            </button>
            <button
              onClick={() => startQuiz(10)}
              className="w-full px-6 py-4 border border-ink-200/30 text-ink-100 rounded-xl text-base hover:border-amber-accent hover:text-amber-accent active:scale-[0.98] transition"
            >
              {t.btn_short}
            </button>
          </div>

          <p className="mt-8 text-xs font-mono text-ink-300/60 leading-relaxed">
            {t.footer}
          </p>
        </div>
      </main>
    );
  }

  // ─────────────────── DONE ───────────────────
  if (phase === "done") {
    const pct = Math.round((score / total) * 100);
    const grade =
      pct >= 90
        ? t.grade_excellent
        : pct >= 70
          ? t.grade_good
          : pct >= 50
            ? t.grade_ok
            : t.grade_weak;
    const wrongAnswers = answers.filter((a) => !a.correct);

    return (
      <main className="relative min-h-dvh px-5 py-10">
        <div className="max-w-md mx-auto animate-fade-up">
          <div className="text-xs uppercase tracking-[0.25em] text-ink-200/70 font-mono mb-2">
            {t.done_label}
          </div>
          <h2 className="font-display text-5xl text-ink-50 mb-1">{grade}</h2>
          <div className="font-mono text-4xl text-amber-accent mt-4">
            {score} / {total}
            <span className="text-ink-300/60 text-2xl ml-2">({pct}%)</span>
          </div>

          <div className="mt-8 p-4 border border-ink-200/15 rounded-xl bg-navy-800/50">
            <div className="text-xs uppercase tracking-wider font-mono text-ink-200/70 mb-3">
              {t.summary}
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-2xl font-mono text-emerald-400">
                  {score}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-ink-300/60 font-mono">
                  {t.correct}
                </div>
              </div>
              <div>
                <div className="text-2xl font-mono text-rose-400">
                  {wrongCount}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-ink-300/60 font-mono">
                  {t.wrong}
                </div>
              </div>
              <div>
                <div className="text-2xl font-mono text-ink-100">
                  {bestScore ?? pct}%
                </div>
                <div className="text-[10px] uppercase tracking-wider text-ink-300/60 font-mono">
                  {t.best}
                </div>
              </div>
            </div>
          </div>

          {wrongAnswers.length > 0 && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider font-mono text-ink-200/70 mb-3">
                {t.review_wrong} ({wrongAnswers.length})
              </div>
              <div className="space-y-3">
                {wrongAnswers.map((a) => {
                  const q = QUESTIONS.find((x) => x.id === a.questionId)!;
                  return (
                    <details
                      key={a.questionId}
                      className="border border-rose-500/20 bg-rose-500/5 rounded-lg p-3 text-sm"
                    >
                      <summary className="cursor-pointer text-ink-100 font-medium">
                        <span className="font-mono text-xs text-rose-400/80 mr-2">
                          {q.week}
                        </span>
                        {q.question[lang]}
                      </summary>
                      <div className="mt-2 pt-2 border-t border-rose-500/10 space-y-1.5 text-xs">
                        <div>
                          <span className="text-rose-400 font-mono">✗ </span>
                          <span className="text-ink-200">
                            {q.options[lang][a.pickedIndex]}
                          </span>
                        </div>
                        <div>
                          <span className="text-emerald-400 font-mono">✓ </span>
                          <span className="text-ink-100 font-medium">
                            {q.options[lang][q.correctIndex]}
                          </span>
                        </div>
                        <div className="mt-2 text-ink-200/80 leading-relaxed">
                          {q.explanation[lang]}
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          )}

          <button
            onClick={restart}
            className="mt-7 w-full px-6 py-4 bg-amber-accent text-navy-900 font-semibold rounded-xl text-base shadow-glow hover:brightness-110 active:scale-[0.98] transition"
          >
            ↺ {t.btn_again}
          </button>
        </div>
      </main>
    );
  }

  // ─────────────────── PLAYING / REVIEW ───────────────────
  if (!current) return null;

  return (
    <main className="relative min-h-dvh flex flex-col px-5 py-6 pb-10">
      {/* Top bar */}
      <header className="flex items-center justify-between mb-5">
        <div className="font-mono text-xs">
          <span className="text-ink-300/60">{idx + 1}</span>
          <span className="text-ink-300/40 mx-1">/</span>
          <span className="text-ink-100">{total}</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-emerald-400/90">✓ {score}</span>
          <span className="text-ink-300/40">·</span>
          <span className="text-rose-400/90">✗ {wrongCount}</span>
        </div>
        <button
          onClick={restart}
          className="text-ink-300/60 font-mono text-xs hover:text-amber-accent transition"
          aria-label={t.exit}
        >
          {t.exit}
        </button>
      </header>

      {/* Progress bar */}
      <div className="h-1 bg-ink-300/10 rounded-full overflow-hidden mb-7">
        <div
          className="h-full bg-amber-accent transition-all duration-500 ease-out"
          style={{
            width: `${((idx + (phase === "review" ? 1 : 0)) / total) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <div key={current.id} className="animate-fade-up flex-1">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 border border-amber-accent/30 text-amber-accent/80 rounded">
            {current.week}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-300/60">
            {current.topic[lang]}
          </span>
          {current.inferred && (
            <span
              title={t.inferred_tooltip}
              className="font-mono text-[10px] uppercase tracking-wider text-ink-300/40 cursor-help"
            >
              ※
            </span>
          )}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl text-ink-50 leading-tight mb-6">
          {current.question[lang]}
        </h2>

        {/* Options */}
        <div className="space-y-2.5">
          {currentOptionsOrder.map((realIdx, shuffledIdx) => {
            const isPicked = picked === shuffledIdx;
            const isCorrect = realIdx === current.correctIndex;
            const showState = phase === "review";

            let cls = "border-ink-200/15 hover:border-ink-200/40 text-ink-100";
            let icon = "";
            if (showState) {
              if (isCorrect) {
                cls = "border-emerald-400/60 bg-emerald-400/10 text-ink-50";
                icon = "✓";
              } else if (isPicked && !isCorrect) {
                cls =
                  "border-rose-400/60 bg-rose-400/10 text-ink-200 animate-shake";
                icon = "✗";
              } else {
                cls = "border-ink-200/10 text-ink-300/60";
              }
            }

            return (
              <button
                key={shuffledIdx}
                onClick={() => handlePick(shuffledIdx)}
                disabled={phase === "review"}
                className={`no-select w-full text-left px-4 py-3.5 border rounded-xl transition-all duration-200 ${cls} ${
                  phase === "review" ? "cursor-default" : "active:scale-[0.99]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-ink-300/60 mt-0.5 shrink-0">
                    {String.fromCharCode(65 + shuffledIdx)}
                  </span>
                  <span className="text-[15px] leading-snug">
                    {current.options[lang][realIdx]}
                  </span>
                  {showState && icon && (
                    <span
                      className={`ml-auto font-mono text-base shrink-0 ${
                        isCorrect ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {icon}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation (review phase) */}
        {phase === "review" && (
          <div
            className={`mt-6 p-4 border rounded-xl animate-pop ${
              answers[answers.length - 1]?.correct
                ? "border-emerald-400/30 bg-emerald-400/5"
                : "border-rose-400/30 bg-rose-400/5"
            }`}
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className={`font-mono text-xs uppercase tracking-wider ${
                  answers[answers.length - 1]?.correct
                    ? "text-emerald-400"
                    : "text-rose-400"
                }`}
              >
                {answers[answers.length - 1]?.correct
                  ? t.correct_label
                  : t.wrong_label}
              </span>
              {!answers[answers.length - 1]?.correct && (
                <span className="font-mono text-xs text-ink-300/60">
                  → {String.fromCharCode(65 + correctShuffledIndex)}
                </span>
              )}
            </div>
            <p className="text-sm text-ink-100 leading-relaxed">
              {current.explanation[lang]}
            </p>
          </div>
        )}
      </div>

      {/* Bottom action */}
      {phase === "review" && (
        <button
          onClick={next}
          className="mt-6 w-full px-6 py-4 bg-amber-accent text-navy-900 font-semibold rounded-xl text-base shadow-glow hover:brightness-110 active:scale-[0.98] transition animate-fade-up"
        >
          {idx + 1 < total ? `${t.next_q} →` : `${t.finish} →`}
        </button>
      )}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-2 border border-ink-200/15 rounded-lg bg-navy-800/30">
      <div className="text-[10px] uppercase tracking-wider text-ink-300/60">
        {label}
      </div>
      <div className="text-ink-100 mt-0.5">{value}</div>
    </div>
  );
}

const translations = {
  hu: {
    intro:
      "Felkészülő kvíz a heti előadás-kérdésekből. Random sorrend, élő pontszám, részletes magyarázat minden válasz után. A bezárt opciók is megkeverve jönnek.",
    stat_questions: "Kérdés",
    stat_weeks: "Hét",
    stat_best: "Legjobb",
    stat_lang: "Nyelv",
    btn_full: "Teljes kvíz",
    btn_short: "Gyors kör (10 kérdés)",
    footer:
      "Tipp: a ※ jellel jelölt kérdéseknél a Canvas elrejtette a helyes választ — az előadás-anyagok és a practice quiz alapján rekonstruált válasz szerepel.",
    correct: "Jó",
    wrong: "Rossz",
    best: "Rekord",
    summary: "Összegzés",
    review_wrong: "Hibás válaszok átnézése",
    done_label: "Vége",
    grade_excellent: "Kiváló!",
    grade_good: "Szép munka!",
    grade_ok: "Megvan.",
    grade_weak: "Még gyakorolj.",
    btn_again: "Új kör",
    correct_label: "Helyes",
    wrong_label: "Helytelen",
    next_q: "Következő",
    finish: "Befejezés",
    exit: "Kilépés",
    inferred_tooltip: "Helyes válasz rekonstruálva az előadás-anyagból",
  },
  en: {
    intro:
      "Practice quiz from the weekly lecture questions. Random order, live score, detailed explanation after every answer. Answer options are also shuffled.",
    stat_questions: "Questions",
    stat_weeks: "Weeks",
    stat_best: "Best",
    stat_lang: "Lang",
    btn_full: "Full quiz",
    btn_short: "Quick round (10 questions)",
    footer:
      "Note: questions marked ※ had their correct answer hidden by Canvas — the answer here is reconstructed from the lecture materials and the practice quiz.",
    correct: "Correct",
    wrong: "Wrong",
    best: "Best",
    summary: "Summary",
    review_wrong: "Review wrong answers",
    done_label: "Finished",
    grade_excellent: "Excellent!",
    grade_good: "Nice work!",
    grade_ok: "You made it.",
    grade_weak: "Keep practicing.",
    btn_again: "New round",
    correct_label: "Correct",
    wrong_label: "Wrong",
    next_q: "Next",
    finish: "Finish",
    exit: "Exit",
    inferred_tooltip: "Correct answer reconstructed from lecture materials",
  },
} as const;
