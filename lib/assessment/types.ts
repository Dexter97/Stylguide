export type AssessmentCategoryKey =
  | "strategy"
  | "governance"
  | "data"
  | "process"
  | "culture";

export type LikertValue = 1 | 2 | 3 | 4 | 5;

export type AssessmentQuestion = {
  id: string;
  category: AssessmentCategoryKey;
  text: string;
};

export type AssessmentConfig = {
  categories: Array<{ key: AssessmentCategoryKey; label: string; description: string }>;
  questions: AssessmentQuestion[];
};

export type AssessmentAnswers = Record<string, LikertValue | undefined>;

export type CategoryScore = {
  key: AssessmentCategoryKey;
  label: string;
  score: number; // 0-100
};

export type AssessmentResult = {
  overall: number; // 0-100
  level: 1 | 2 | 3 | 4 | 5;
  levelLabel: string;
  levelSummary: string;
  categoryScores: CategoryScore[];
};
