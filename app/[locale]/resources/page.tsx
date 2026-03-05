import Link from 'next/link';
import { resources } from '@/content/resources';

export default function ResourcesPage({ params }: { params: { locale: string } }) {
  return <div className="space-y-3"><h1 className="text-3xl font-semibold">Resources</h1>{resources.map((r) => <Link key={r.slug} href={`/${params.locale}/resources/${r.slug}`} className="block underline">{r.title}</Link>)}</div>;
}
