import { AssessmentConfig } from './types';

export const assessmentConfig: AssessmentConfig = {
  categories: [
    {
      key: 'strategy',
      label: 'Strategie & Leiderschap',
      description: 'Strategische richting, eigenaarschap en prioritering.'
    },
    {
      key: 'governance',
      label: 'Governance & Risico',
      description: 'Kaders voor verantwoord gebruik, privacy en compliance.'
    },
    {
      key: 'data',
      label: 'Data & Systemen',
      description: 'Datakwaliteit, beschikbaarheid en systeemintegraties.'
    },
    {
      key: 'process',
      label: 'Processen & Automatisering',
      description: 'Inbedding van AI in processen en operationele workflows.'
    },
    {
      key: 'culture',
      label: 'Cultuur & Adoptie',
      description: 'Vaardigheden, gedrag en blijvende adoptie in teams.'
    }
  ],
  questions: [
    { id: 'q1', category: 'strategy', text: 'AI-doelen zijn verbonden met de bedrijfsstrategie.' },
    { id: 'q2', category: 'strategy', text: 'Leiderschap neemt actief eigenaarschap op AI.' },
    { id: 'q3', category: 'governance', text: 'Er is formeel AI-governance beleid.' },
    { id: 'q4', category: 'governance', text: 'Risico’s en compliance worden periodiek getoetst.' },
    { id: 'q5', category: 'data', text: 'Data is betrouwbaar, toegankelijk en bruikbaar voor AI.' },
    { id: 'q6', category: 'data', text: 'Systemen ondersteunen AI-integraties via API’s.' },
    { id: 'q7', category: 'process', text: 'AI use-cases zijn geprioriteerd op business impact.' },
    { id: 'q8', category: 'process', text: 'AI-workflows zijn ingebed in kernprocessen.' },
    { id: 'q9', category: 'culture', text: 'Teams beschikken over AI-basisvaardigheden.' },
    { id: 'q10', category: 'culture', text: 'Adoptie krijgt ondersteuning via training en coaching.' }
  ]
};
