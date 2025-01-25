'use client';

import { Card, CardContent } from "./ui/card"
import { 
    Carousel, 
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,     
} from "./ui/carrousel";
import Image from "next/image";

interface CarouselProps {
    src: string;
    alt: string;
  }
  
  // Lista de itens do carrossel
  const carouselItems: CarouselProps[] = [
    {
      src: '/imgs/Salgado.png',
      alt: 'Salgados',
    },
    {
      src: '/imgs/bolo.png',
      alt: 'Bolo',
    },
    {
      src: '/imgs/doce.png',
      alt: 'Doce',
    },
  ];

const HeroCarroseul = () => {
  return (
    <Carousel className="w-full max-w-xs">
        <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="relative w-full h-full">
                        <Image 
                            src={item.src} 
                            alt={item.alt} 
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}

export default HeroCarroseul;
