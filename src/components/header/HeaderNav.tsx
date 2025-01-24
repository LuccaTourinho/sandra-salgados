'use client';

import Link from 'next/link';

interface LinkProps {
    href: string;
    text: string;
}

const Links: LinkProps[] = [
    {
      href: "/",
      text: "INÍCIO",
    },
    {
      href: "/cardapio",
      text: "CARDÁPIO",
    },
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


const HeaderNav = () => {
  return (
    <nav className="flex justify-around space-x-4">
      {
        Links.map((link, index) => (
          <Link 
            key={index} 
            href={link.href} 
            className="hidden xl:block text-md text-text-950 font-semibold hover:underline transition-all duration-300 ease-in-out">
            {link.text}
          </Link>
        ))
      }
    </nav>
  )
}

export default HeaderNav;
