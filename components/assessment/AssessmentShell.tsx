"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { assessmentConfig } from "@/lib/assessment/questions";
import type { AssessmentAnswers, LikertValue } from "@/lib/assessment/types";
import { computeAssessmentResult } from "@/lib/assessment/scoring";
import ProgressBar from "./ProgressBar";
import AssessmentIntro from "./AssessmentIntro";
import AssessmentQuestion from "./AssessmentQuestion";
import AssessmentResults from "./AssessmentResults";

const STORAGE_KEY = "aibm_assessment_v1";

export default function AssessmentShell() {
  const questions = assessmentConfig.questions;
  const total = questions.length;

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const saved = JSON.parse(raw) as {
        started: boolean;
        index: number;
        answers: AssessmentAnswers;
        done: boolean;
      };
      setStarted(saved.started);
      setIndex(saved.index);
      setAnswers(saved.answers || {});
      setDone(saved.done);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ started, index, answers, done }));
  }, [started, index, answers, done]);

  const progress = useMemo(() => {
    const answeredCount = Object.values(answers).filter(Boolean).length;
    return total === 0 ? 0 : (answeredCount / total) * 100;
  }, [answers, total]);

  const current = questions[index];

  const result = useMemo(() => computeAssessmentResult(assessmentConfig, answers), [answers]);

  function start() {
    setStarted(true);
    setDone(false);
    setIndex(0);
  }

  function restart() {
    setAnswers({});
    setIndex(0);
    setDone(false);
    setStarted(false);
    localStorage.removeItem(STORAGE_KEY);
  }

  function setAnswer(qid: string, v: LikertValue) {
    setAnswers((prev) => ({ ...prev, [qid]: v }));
  }

  function next() {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
  }

  function back() {
    setIndex((i) => Math.max(0, i - 1));
  }

  if (!started) return <AssessmentIntro onStart={start} />;
  if (done) return <AssessmentResults result={result} onRestart={restart} />;

  const value = answers[current.id];

  return (
    <div className="grid gap-6">
      <ProgressBar value={progress} />

      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
      >
        <AssessmentQuestion
          text={current.text}
          value={value}
          onChange={(v) => {
            setAnswer(current.id, v);
            setTimeout(next, 120);
          }}
        />
      </motion.div>

      <div className="flex items-center justify-between">
        <button
          className="text-sm font-semibold text-neutral-700 hover:text-neutral-900"
          onClick={back}
          disabled={index === 0}
        >
          Terug
        </button>
        <p className="text-xs text-neutral-500">
          Vraag {index + 1} van {total}
        </p>
        <button
          className="text-sm font-semibold text-neutral-700 hover:text-neutral-900"
          onClick={next}
          disabled={!value}
        >
          Volgende
        </button>
      </div>
    </div>
  );
}
