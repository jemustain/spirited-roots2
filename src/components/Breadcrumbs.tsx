import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-plum-500 mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <span className="mx-1 text-plum-400">&gt;</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-plum-800 transition-colors underline-offset-2 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-plum-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
