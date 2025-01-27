'use client';

import { useState } from "react";   
import Image from "next/image";
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
        img: '/imgs/camarote.png',
        title: 'Camarote Salvador',
        description: 'Eleve sua experiência no Carnaval de Salvador com os nossos sabores exclusivos! No camarote mais desejado da cidade, oferecemos uma seleção de doces e salgados gourmet, preparados com ingredientes de alta qualidade e um toque especial de carinho. Deixe sua festa ainda mais memorável com nossos produtos que já encantaram grandes eventos.'
    },
    {
        id: 1,
        img: '/imgs/junina.png',
        title: 'Festa Junina',
        description: 'Celebre a tradição com o sabor inigualável! Nossa Festa Junina é repleta de quitutes típicos, como bolos de milho, pé de moleque e cocada, todos feitos com o cuidado e a dedicação que só nós oferecemos. Uma festa que vai encantar seus convidados e tornar esse momento ainda mais especial.'
    },
    {
        id: 2,
        img: '/imgs/15anos.png',
        title: 'Festa de 15 anos',
        description: 'Transforme a festa de 15 anos dos seus sonhos em realidade com os nossos produtos. Desde o bolo decorado até os docinhos personalizados, cada detalhe é pensado para refletir a personalidade da aniversariante e garantir uma celebração única e inesquecível.'
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
                <div className="bg-primary-500 rounded-lg p-1 md:p-3 hover:bg-primary-600 hover:cursor-pointer transition-all duration-300" onClick={handlePrev}>
                    <ArrowLeft size={22} strokeWidth={3}/>
                </div>
                <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] xl:w-[800px] xl:h-[1000px] 2xl:w-[1000px] 2xl:h-[1200px] overflow-hidden border-1 border-text-950 rounded-lg">
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
                                        <p className="absolute bottom-2 right-4 bg-background-950 text-text-50 rounded-lg p-2 text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl font-extrabold">
                                            {event.title}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="bg-primary-500 rounded-lg p-1 md:p-3 hover:bg-primary-600 hover:cursor-pointer transition-all duration-300" onClick={handleNext}>
                    <ArrowRight size={22} strokeWidth={3}/>
                </div>
            </div>
            <p className="text-xl font-extralight text-text-950 text-wrap w-[300px] md:w-[500px] xl:w-[800px] 2xl:w-[1000px]">
                {events[activeIndex].description}
            </p>
        </div>
    )
}

export default EventSwipper;
