'use client';

import { useI18n } from '@/context/i18n-context';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>{t('footer.tagline')}</p>
        <p className="mt-2">
          {t('footer.email')}: vitalia@gmail.com | {t('footer.phone')}: +51 970 526 672
        </p>
        <p className="mt-4">
          &copy; 2025 Vitalia. {t('footer.rightsReserved')}
        </p>
      </div>
    </footer>
  );
}
