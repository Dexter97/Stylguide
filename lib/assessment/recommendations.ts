import type { AssessmentCategoryKey, AssessmentResult } from './types';

export type RecommendationItem = {
  title: string;
  bullets: string[];
};

const recByKey: Record<AssessmentCategoryKey, RecommendationItem> = {
  governance: {
    title: 'Breng Shadow AI onder controle',
    bullets: [
      "Maak duidelijke do's en don'ts voor data en IP.",
      'Introduceer een standaard werkwijze en goedgekeurde tools.',
      'Zet logging en eigenaarschap neer.'
    ]
  },
  strategy: {
    title: 'Maak keuzes die rendement sturen',
    bullets: [
      'Kies 3 use cases met duidelijke ROI en owner.',
      'Leg succesmetrics vast.',
      'Stop met losse pilots zonder besluit.'
    ]
  },
  data: {
    title: 'Maak data bruikbaar voor AI',
    bullets: [
      'Maak definities eenduidig.',
      'Verbeter datakwaliteit op kernbronnen.',
      'Regel toegangen en governance.'
    ]
  },
  process: {
    title: 'Vertaal AI naar workflows',
    bullets: [
      'Maak playbooks en templates voor herhaalbaar werk.',
      'Meet tijdswinst en kwaliteit.',
      'Automatiseer de 2 meest terugkerende processen.'
    ]
  },
  culture: {
    title: 'Zorg dat adoptie echt gebeurt',
    bullets: [
      'Train teams op veilig en effectief gebruik.',
      'Werk met voorbeelden uit eigen praktijk.',
      'Maak een feedback loop zodat kwaliteit stijgt.'
    ]
  }
};

export function topRecommendations(result: AssessmentResult): RecommendationItem[] {
  const sorted = [...result.categoryScores].sort((a, b) => a.score - b.score);
  const lowest = sorted.slice(0, 3).map((c) => c.key);
  return lowest.map((k) => recByKey[k]);
}
