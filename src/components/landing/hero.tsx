'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/i18n-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// This is a workaround for basePath not being available on the client at build time.
// We resolve the correct image path on the client.
const useAssetPath = (path: string) => {
  const [assetPath, setAssetPath] = useState(path);

  useEffect(() => {
    // In a static export, `basePath` is not needed on the client.
    // The relative path from the public directory works correctly.
    setAssetPath(`/${path.split('/').pop()}`);
  }, [path]);

  // When deploying to GitHub pages, the assetPrefix is added by Next.js build process.
  // We just need the path relative to the public folder.
  return `/${path.split('/').pop()}`;
};


export function Hero() {
  const { t } = useI18n();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');
  const heroImageUrl = heroImage ? `/${heroImage.imageUrl}` : `/place_holder.jpg`;

  return (
    <section 
      className="relative py-20 md:py-28 text-white"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60 z-0"
      />
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/download" passHref>
                <Button size="lg">{t('hero.requestDemo')}</Button>
              </Link>
              <Link href="#faq" passHref>
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  {t('hero.learnMore')} <span aria-hidden="true" className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
