'use client';

import {motion} from 'framer-motion';
import { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    async function fetchProdutos(){
      try{
        const response = await fetch('/api/produtos');
        if(!response.ok){
          throw new Error('Erro ao buscar os produtos');
        }
        const produtos = await response.json();
        console.log("Produtos: ", produtos);
      }catch(error){
        console.error('Erro ao buscar os produtos: ', error);
      }
    }

    fetchProdutos();
  }, []);

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
