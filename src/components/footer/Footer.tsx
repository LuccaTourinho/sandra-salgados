'use client';

import FooterMedia from "./FooterMedia";
import FooterMessage from "./FooterMessage";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="w-full py-2 xl:py-4 bg-background-950 text-text-50">
        <div className="w-ful flex flex-row items-center justify-around h-[250px]">
            <FooterMedia/>
            <FooterMessage/>
            <FooterNav/>
        </div>
    </footer>
  )
}

export default Footer;
