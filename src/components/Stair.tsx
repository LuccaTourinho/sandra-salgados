'use client';

import { motion } from "framer-motion";

const totalSteps = 7;

const Stair: React.FC = () => {
    return (
        <>
            {
                [...Array(totalSteps)].map((_, index) => {
                    return (
                        <motion.div 
                            key={index}
                            initial={{ top: "0%" }}
                            animate={{ top: "100%" }}
                            exit={{ top: ["100%", "0%"] }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: (totalSteps - index - 1) * 0.2
                            }}
                            className="w-full h-full relative bg-text-950"
                        />
                    );
                })
            }
        </>
    );
};

export default Stair;