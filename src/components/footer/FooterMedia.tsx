'use client';

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const FooterMedia = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <Link href={'/'}>
          <Image
            src="/imgs/Salgados.png"
            alt="Sandra Salgados Logo"
            width={100}
            height={100}
            className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] 2xl:w-[180px] 2xl:h-[180px] "
          /> 
        </Link>
        <div className="flex flex-row items-center justify-center gap-2">
            <Link 
                href={'https://www.instagram.com/sandra.salgados/'} 
                target='_blank'
                rel="noopener noreferrer">
                <div className="flex items-center justify-center p-1 bg-background-700 rounded-md">    
                    <FaInstagram 
                        size={25} 
                        strokeWidth={2} 
                        className="text-text-50 hover:text-accent-500 transition-all duration-300"/>
                </div>
            </Link>
            <Link 
                href={'https://www.instagram.com/sandra.salgados/'} 
                target='_blank'
                rel="noopener noreferrer">
                <div className="flex items-center justify-center p-1 bg-background-700 rounded-md">    
                    <FaWhatsapp
                        size={25} 
                        strokeWidth={2} 
                        className="text-text-50 hover:text-accent-500 transition-all duration-300"/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default FooterMedia
