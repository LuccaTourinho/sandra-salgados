'use client';

import { motion } from "framer-motion";
import AvaliatioTrio from "@/components/AvaliationTrio";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface AvaliacoesProps {
    id: number;
    img: string;
    name: string;
    avaliation: string;
}

const AvaliacoesCards: AvaliacoesProps[] = [
    {
        id: 0,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
    {
        id: 1,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
    {
        id: 2,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
    {
        id: 3,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
    {
        id: 4,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
    {
        id: 5,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
    {
        id: 6,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
    {
        id: 7,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
    {
        id: 8,
        img: '/imgs/home-image.jpg',
        name: 'Nome da pessoa',
        avaliation: 'Um pequeno relato elogiando a empresa'
    },
]

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Função para dividir o array em grupos de 3
    const chunkArray = (array: AvaliacoesProps[], size: number) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    // Divide AvaliacoesCards em grupos de 3
    const groupedAvaliacoes = chunkArray(AvaliacoesCards, 3);

    // Funções de navegação
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % groupedAvaliacoes.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + groupedAvaliacoes.length) % groupedAvaliacoes.length);
    };


    return (
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 , transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
          className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-background-50">
          <div className="container mx-auto flex flex-col items-center justify-center gap-4">
            <h1 className="text-xs sm:text-lg md:text-4xl font-semibold text-text-950 text-center">
                Avaliações
            </h1>
            <div className="flex flex-row items-center justify-center gap-4">
                <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] 2xl:w-[1000px] h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {groupedAvaliacoes.map((group, index) => {
                            const position = 
                                index < activeIndex
                                    ? '-translate-x-full'
                                    : index > activeIndex
                                    ? 'translate-x-full'
                                    : 'translate-x-0';

                            return (
                                <div 
                                    key={index} 
                                    className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${position} p-2 gap-4`}
                                >
                                    <AvaliatioTrio Values={group} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-primary-500 p-1 md:p-3 hover:bg-primary-600 hover:cursor-pointer transition-all duration-300" >
                    <ArrowLeft size={22} strokeWidth={3} onClick={handlePrev}/>
                </div>
                <div className="bg-primary-500 p-1 md:p-3 hover:bg-primary-600 hover:cursor-pointer transition-all duration-300">
                    <ArrowRight size={22} strokeWidth={3} onClick={handleNext}/>
                </div>
            </div>
          </div>
        </motion.section>
      );
}

export default page
