'use client';

import { Ban, Clock, MapPin } from "lucide-react";
import React from "react";

interface FooterMessageItem { 
    image: React.ReactNode;
    text: string[];
};

const messages: FooterMessageItem[] = [
    {
        image: <Ban size={20} strokeWidth={3}/>,
        text: ['Não fazemos delivery']
    },
    {
        image: <MapPin size={20} strokeWidth={3}/>,
        text: ['Em toda Salvador']
    },
    {
        image: <Clock size={20} strokeWidth={3}/>,
        text: ['Segunda a Sexta - 09:00 às 18:00', 'Sábado - 09:00 às 12:00']
    },
];

const FooterMessage = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      {
        messages.map((message, index) => (
            <div key={index} className="flex flex-row items-center justify-center gap-0.5 md:gap-1 xl:gap-2">
                <div className="text-text-500">{message.image}</div>
                <div className="flex flex-col items-start justify-center gap-1 xl:gap-2">
                    {message.text.map((line, lineindex) => (
                        <span key={lineindex} className="text-background-50 text-xs md:text-md xl:text-xl">{line}</span>
                    ))}
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default FooterMessage;
