import { cases } from '@/content/cases';

export default function CaseDetail({ params }: { params: { slug: string } }) {
  const item = cases.find((c) => c.slug === params.slug);
  return <div><h1 className="text-3xl font-semibold">{item?.title ?? 'Case'}</h1><p className="mt-2">{item?.summary}</p></div>;
}
