import type {
  AssessmentAnswers,
  AssessmentConfig,
  AssessmentResult,
  CategoryScore,
  LikertValue
} from './types';

function toPercent(value: number, max: number) {
  return Math.round((value / max) * 100);
}

function levelFromOverall(overall: number): 1 | 2 | 3 | 4 | 5 {
  if (overall < 25) return 1;
  if (overall < 45) return 2;
  if (overall < 65) return 3;
  if (overall < 82) return 4;
  return 5;
}

function levelMeta(level: 1 | 2 | 3 | 4 | 5) {
  switch (level) {
    case 1:
      return {
        label: 'Experimenterend',
        summary: 'Veel losse experimenten. Weinig kaders. Hoog risico op Shadow AI.'
      };
    case 2:
      return {
        label: 'Gefragmenteerd',
        summary: 'Er gebeurt veel, maar zonder samenhang. Rendement blijft onvoorspelbaar.'
      };
    case 3:
      return {
        label: 'Gestructureerd',
        summary: 'De basis staat. Nu versnellen met workflows, meten en borging.'
      };
    case 4:
      return {
        label: 'Geoptimaliseerd',
        summary: 'AI levert aantoonbaar waarde. Governance en enablement zijn volwassen.'
      };
    case 5:
      return {
        label: 'AI-native',
        summary: 'AI is onderdeel van hoe je werkt, meet en verbetert. Continu en schaalbaar.'
      };
  }
}

export function computeAssessmentResult(
  config: AssessmentConfig,
  answers: AssessmentAnswers
): AssessmentResult {
  const categories = config.categories;

  const categoryScores: CategoryScore[] = categories.map((cat) => {
    const qs = config.questions.filter((q) => q.category === cat.key);
    const values = qs.map((q) => answers[q.id]).filter(Boolean) as LikertValue[];
    const total = values.reduce((s, v) => s + v, 0);
    const max = qs.length * 5;
    const score = values.length === 0 ? 0 : toPercent(total, max);
    return { key: cat.key, label: cat.label, score };
  });

  const allQs = config.questions;
  const allVals = allQs.map((q) => answers[q.id]).filter(Boolean) as LikertValue[];
  const overall =
    allVals.length === 0 ? 0 : toPercent(allVals.reduce((s, v) => s + v, 0), allQs.length * 5);

  const level = levelFromOverall(overall);
  const meta = levelMeta(level);

  return {
    overall,
    level,
    levelLabel: meta.label,
    levelSummary: meta.summary,
    categoryScores
  };
}
