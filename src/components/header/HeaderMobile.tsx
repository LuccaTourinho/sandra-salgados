'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import HeaderAccountOptions from "./HeaderAccountOptions";

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

const HeaderMobile = () => {

  return (
    <Sheet>
        {/* Gatilho */}
        <SheetTrigger className="flex justify-center items-center arial-label='Abrir menu px-4">
            <AlignJustify 
                size={36} 
                strokeWidth={2} 
                className="text-text-950 hover:text-accent-500 transition-all duration-300"/>
        </SheetTrigger>

        {/* Conteúdo */}
        <SheetContent side={"right"} className="flex flex-col bg-background-50 z-50">
            {/* Título */}
            <SheetTitle className="sr-only">
                Navegacao Mobile
            </SheetTitle>
            <div className="mt-32 mb-20 text-center text-2xl">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold uppercase text-text-950">
                        sandra salgados
                    </h1>
                </Link>
            </div>
            {/* Navegação */}
            <nav className="flex flex-col justify-center items-center gap-4">
                {
                    Links.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.href} 
                            className="text-md text-text-950 font-semibold hover:underline transition-all duration-300 ease-in-out">
                            {link.text}
                        </Link>
                    ))
                }
            </nav>
            {/* Conta */}
            <div className="flex items-center justify-center">
              <HeaderAccountOptions />
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default HeaderMobile
