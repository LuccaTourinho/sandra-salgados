'use client';

import { Suspense } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderAccountOptions from "./HeaderAccountOptions";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 py-2 xl:py-4 border-b-2 border-text-950">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex items-center justify-between flex-row">
          <HeaderLogo/> 
          <HeaderNav />
          <div className="hidden xl:block">
            <HeaderAccountOptions />
          </div>
          <div className="block xl:hidden">
            <HeaderMobile />
          </div>
        </div>
      </Suspense>
    </header>
  )
}

export default Header
