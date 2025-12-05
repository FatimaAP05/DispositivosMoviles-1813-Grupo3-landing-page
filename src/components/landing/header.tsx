'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';
import { useI18n } from '@/context/i18n-context';

export function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 ml-6">
          <Image src="/vitalia_logo.png" alt="Vitalia Logo" width={50} height={50} />
          <span className="font-bold sm:inline-block">Vitalia</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2 mr-6">
          <LanguageSwitcher />
          <Link href="/download">
            <Button>{t('header.getStarted')}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
