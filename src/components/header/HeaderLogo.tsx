'use client';

import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <div className='flex items-center justify-center gap-1'>
        <Link href={'/'}>
          <Image
            src="/imgs/Salgados.png"
            alt="Sandra Salgados Logo"
            width={100}
            height={100}
            className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] 2xl:w-[150px] 2xl:h-[150px] "
          /> 
        </Link>
        <div className="flex flex-col items-start justify-center gap-1">
            <p className="uppercase text-xs sm:text-md lg:text-lg">sandra salgados</p>
            <p className="uppercase text-xs sm:text-md lg:text-lg">o sabor da tradição,<br/>feito com o carinho de vó</p>
        </div>
    </div>
  )
}

export default HeaderLogo;
