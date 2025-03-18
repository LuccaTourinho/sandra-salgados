'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';

const page = () => {
  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-background-50"
    >
        <div className='container mx-auto flex flex-col items-center gap-4'>
            <h1 className="text-xs sm:text-lg md:text-4xl font-semibold uppercase text-text-950">
                sobre nós
            </h1>
            <div className='flex flex-col md:flex-row w-[200px] sm:w-[300px] md:w-[500px] xl:w-[800px] 2xl:w-[1000px]'>
                <div className='relative w-full h-[200px] sm:h-[300px] md:h-[500px] xl:h-[600px] '>
                    <div className='absolute w-full h-full'>
                        <Image
                            src="/imgs/home-image.jpg"
                            alt="Sandra Salgados"
                            layout='fill'
                            objectFit='cover'
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-around w-full h-[200px] sm:h-[300px] md:h-[500px] xl:h-[600px]  p-1'>
                    <p className='text-xs md:text-sm xl:text-xl font-semibold text-text-950 text-wrap px-2 xl:leading-7'>
                        Olá! Sou Sandra de Magalhães, a microempreendedora responsável pelos produtos e serviços oferecidos aqui.<br/><br className='hidden md:block'/>
                        Além de atender aos pedidos tradicionais, também realizo projetos mais elaborados para eventos especiais.<br/><br className='hidden md:block'/> 
                        Já tive a honra de trabalhar em grandes ocasiões, como o Camarote Salvador e a Festa Junina da Secretaria de Educação, além de diversos casamentos, festas de 15 anos e eventos corporativos.<br/><br className='hidden md:block'/>
                        Estou aqui para transformar sua celebração em um momento inesquecível com sabores que marcam!
                    </p>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default page
