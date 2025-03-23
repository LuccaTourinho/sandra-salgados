'use client';

import {motion} from 'framer-motion';

const page = () => {
  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-background-50"
    >
      
    </motion.section>
  )
}

export default page
