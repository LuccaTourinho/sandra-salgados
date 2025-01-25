'use client';

import HeroCarroseul from "@/components/HeroCarroseul";
import MessageDisplay from "@/components/MessageDisplay";


export default function Home() {
  return (
    <section className="h-screen w-full bg-background-50 flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-xs sm:text-lg md:text-4xl font-semibold uppercase text-text-950 flex flex-col items-center justify-center">
          da nossa cozinha para o seu evento<br/>
          <p>
            <span className="text-accent-600">qualidade</span> que o cliente <span className="text-accent-600">merece</span>
          </p>
        </h1>
        <div className={`flex flex-col xl:flex-row items-center justify-around gap-2 xl:gap-14`}>
          <MessageDisplay />
          <HeroCarroseul />
        </div>
      </div>
    </section>
  );
}
