import React from 'react';
import { type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Carousel as UiCarousel } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Props {
  images: string[];
  noButtons?: boolean;
}

export const Carousel: React.FC<Props> = ({ images, noButtons = false }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto  max-w-7xl">
      <UiCarousel
        setApi={setApi}
        className="w-full  max-w-7xl"
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]}
        opts={{
          align: 'start',
          loop: true
        }}
      >
        <CarouselContent>
          {images.map((url, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center">
                <img
                  className="w-full max-w-full rounded-lg border-x border-y border-gray-300 dark:border-zinc-800 object-contain"
                  src={url}
                  alt="Project Preview"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!noButtons && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </UiCarousel>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};
