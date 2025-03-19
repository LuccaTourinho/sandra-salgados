'use client';

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  src: string;
  alt: string;
  title: string; // Adicionado para suportar títulos
}
  
// Lista de itens do carrossel
const carouselItems: CarouselProps[] = [
  {
      src: '/imgs/Salgado.png',
      alt: 'Salgados',
      title: 'Salgados',
  },
  {
      src: '/imgs/bolo.png',
      alt: 'Bolo',
      title: 'Bolo',
  },
  {
      src: '/imgs/doce.png',
      alt: 'Doce',
      title: 'Doces',
  },
];

const HeroCarroseul = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    return (
      <div className="flex flex-col items-center py-8 gap-8">
          <div className="flex flex-row items-center justify-around gap-8">
              <div 
                  className="bg-primary-500 rounded-lg p-1 md:p-3 hover:bg-primary-600 hover:cursor-pointer transition-all duration-300" 
                  onClick={handlePrev}
              >
                  <ArrowLeft size={22} strokeWidth={3} />
              </div>
              <div className="relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] xl:w-[400px] xl:h-[400px] overflow-hidden border-1 border-text-950 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                      {carouselItems.map((item, index) => {
                          const position = 
                              index < activeIndex
                                  ? '-translate-x-full'
                                  : index > activeIndex
                                  ? 'translate-x-full'
                                  : 'translate-x-0';

                          return (
                              <div 
                                  key={index} 
                                  className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${position}`}
                              >
                                  <Image
                                      src={item.src}
                                      alt={item.alt}
                                      layout="fill"
                                      objectFit="cover"
                                      className="rounded-lg"
                                  />
                                  <p className="absolute bottom-2 right-4 bg-background-950 text-text-50 rounded-lg p-2 text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl font-extrabold">
                                      {item.title}
                                  </p>
                              </div>
                          );
                      })}
                  </div>
              </div>
              <div 
                  className="bg-primary-500 rounded-lg p-1 md:p-3 hover:bg-primary-600 hover:cursor-pointer transition-all duration-300" 
                  onClick={handleNext}
              >
                  <ArrowRight size={22} strokeWidth={3} />
              </div>
          </div>
      </div>
  );
}

export default HeroCarroseul;
