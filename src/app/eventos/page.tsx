'use client';

import EventSwipper from "@/components/EventSwipper";
import {motion} from "framer-motion";

const page = () => {
  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-background-50">
        <div className="container mx-auto flex flex-col items-center gap-4">
            <h1 className="text-xs sm:text-lg md:text-4xl font-semibold uppercase text-text-950">
                eventos
            </h1>
            <EventSwipper />
        </div>
    </motion.section>
  )
}

export default page
