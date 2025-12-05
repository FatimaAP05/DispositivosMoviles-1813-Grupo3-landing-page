'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/context/i18n-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const screenshots = PlaceHolderImages.filter(p => p.id.startsWith('screenshot-family-'));

export function ScreenshotsFamily() {
  const { t } = useI18n();
  
  return (
    <section id="screenshots-family" className="py-10 md:py-14 bg-accent/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('screenshotsFamily.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('screenshotsFamily.description')}
          </p>
        </div>

        <div className="mt-16">
          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {screenshots.map((screenshot) => (
                <CarouselItem key={screenshot.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0 flex items-center justify-center aspect-[9/19.5]">
                        <Image
                          src={`/${screenshot.imageUrl}`}
                          alt={screenshot.description}
                          width={432}
                          height={936}
                          data-ai-hint={screenshot.imageHint}
                          className="object-contain"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
