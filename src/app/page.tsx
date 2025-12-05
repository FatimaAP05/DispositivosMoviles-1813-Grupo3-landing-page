'use client';

import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { AboutProduct } from '@/components/landing/about-product';
import { AboutTeam } from '@/components/landing/about-team';
import { ScreenshotsCaregiver } from '@/components/landing/screenshots-caregiver';
import { ScreenshotsFamily } from '@/components/landing/screenshots-family';
import { Faq } from '@/components/landing/faq';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Faq />
        <ScreenshotsCaregiver />
        <ScreenshotsFamily />
        <AboutProduct />
        <AboutTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
