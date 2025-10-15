'use client';

import Link from 'next/link';
import { Lang, languages } from '@/app/i18n/config';

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: Lang;
}) {
  return (
    <nav className="fixed top-6 right-6 z-50 flex gap-2">
      {languages.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
            currentLang === l
              ? 'bg-foreground text-white'
              : 'bg-background text-white border border-grey'
          }`}
          aria-current={currentLang === l ? 'true' : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}