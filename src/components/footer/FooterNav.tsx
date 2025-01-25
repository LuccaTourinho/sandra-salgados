'use client';

import Link from "next/link";

interface LinkProps {
    href: string;
    text: string;
}

const Links: LinkProps[] = [
    {
      href: "/eventos",
      text: "EVENTOS",
    },
    {
      href: "/avaliacoes",
      text: "AVALIAÇÕES",
    },
    {
      href: "/politicas",
      text: "POLÍTICAS",
    },
    {
      href: "/sobrenos",
      text: "SOBRE NÓS",
    },
    {
      href: "/contatos",
      text: "CONTATOS",
    },
];

const FooterNav = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-2 border-l-4 border-text-50 pl-4'>
        {Links.map((link, index) => (
            <Link key={index} href={link.href} className="text-lg text-text-50 hover:underline transition-all duration-300">{link.text}</Link>
        ))}
    </div>
  )
}

export default FooterNav
