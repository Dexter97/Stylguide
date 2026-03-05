import { resources } from '@/content/resources';

export default function ResourceDetail({ params }: { params: { slug: string } }) {
  const item = resources.find((r) => r.slug === params.slug);
  return <div><h1 className="text-3xl font-semibold">{item?.title ?? 'Resource'}</h1></div>;
}
