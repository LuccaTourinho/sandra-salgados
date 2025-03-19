'use client';

import HeroCarroseul from "@/components/HeroCarroseul";
import MessageDisplay from "@/components/MessageDisplay";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-background-50">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-xs sm:text-lg md:text-4xl font-semibold uppercase text-text-950 text-center">
          da nossa cozinha para o seu evento<br/>
            <span className="text-accent-600">qualidade</span> que o cliente <span className="text-accent-600">merece</span>
        </h1>
        <div className={`flex flex-col items-center justify-around gap-2 xl:gap-3`}>
          <MessageDisplay />
          <HeroCarroseul />
        </div>
      </div>
    </motion.section>
  );
}
