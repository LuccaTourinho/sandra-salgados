'use client';

import { useState } from "react";   
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface eventProps {
    id: number;
    img: string;
    title: string;
    description: string;
}

const events: eventProps[] = [
    {
        id: 0,
        img: '/imgs/bolo.png',
        title: 'Evento 1',
        description: 'Descrição do evento 1'
    },
    {
        id: 1,
        img: '/imgs/bolo.png',
        title: 'Evento 2',
        description: 'Descrição do evento 2'
    },
    {
        id: 2,
        img: '/imgs/bolo.png',
        title: 'Evento 3',
        description: 'Descrição do evento 3'
    },
];

const EventSwipper = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
      };
    
      const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
      };

    return (
        <div className="flex flex-col items-center py-8 gap-8">
            <div className="flex flex-row items-center justify-around gap-8">
                <div className="bg-primary-500 rounded-lg p-3 hover:bg-primary-600 hover:cursor-pointer transition-all duration-300" onClick={handlePrev}>
                    <ArrowLeft size={36} strokeWidth={3}/>
                </div>
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] xl:w-[800px] xl:h-[1000px] 2xl:w-[1000px] 2xl:h-[1200px] overflow-hidden border-1 border-text-950 rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {
                            events.map((event, index) => {
                                const position = 
                                index < activeIndex
                                ? '-translate-x-full'
                                : index > activeIndex
                                ? 'translate-x-full'
                                : 'translate-x-0';
                                
                                return (
                                    <div 
                                        key={event.id} 
                                        className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${position}`}
                                    >
                                        <Image
                                            src={event.img}
                                            alt={event.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                        <p className="absolute bottom-0 right-0 text-accent-500 p-2 text-2xl font-extrabold">
                                            Evento 1
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="bg-primary-500 rounded-lg p-3 hover:bg-primary-600 hover:cursor-pointer transition-all duration-300" onClick={handleNext}>
                    <ArrowRight size={36} strokeWidth={3}/>
                </div>
            </div>
            <p className="text-md font-extralight text-text-950">
                {events[activeIndex].description}
            </p>
        </div>
    )
}

export default EventSwipper;
