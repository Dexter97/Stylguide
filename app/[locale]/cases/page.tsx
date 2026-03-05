import Link from 'next/link';
import { cases } from '@/content/cases';

export default function CasesPage({ params }: { params: { locale: string } }) {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold">Cases</h1>
      {cases.map((c) => <Link key={c.slug} href={`/${params.locale}/cases/${c.slug}`} className="block underline">{c.title}</Link>)}
    </div>
  );
}
