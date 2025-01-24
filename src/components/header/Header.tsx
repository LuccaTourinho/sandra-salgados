'use client';

import { Suspense } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderAccountOptions from "./HeaderAccountOptions";

const Header = () => {
  return (
    <header className="py-2 xl:py-4">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex items-center justify-between flex-row">
          <HeaderLogo/> 
          <HeaderNav />
          <HeaderAccountOptions />
        </div>
      </Suspense>
    </header>
  )
}

export default Header
