'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";


interface ContactMessageFormat{
    title: string;
    messages: React.ReactNode[];
}

const ContactMessages: ContactMessageFormat[] = [
    {
      title: "Horário de Atendimento",
      messages: [
        <p key="1">Segunda a Sexta - 09:00 às 18:00</p>,
        <p key="2">Sábado - 09:00 às 12:00</p>,
      ],
    },
    {
      title: "Email",
      messages: [<p key="1">sandratourinho@gmail.com</p>],
    },
    {
      title: "Instagram",
      messages: [
        <p key="1">
          <Link href="https://instagram.com/seuusuario" target="_blank" className="hover:underline">
            Clique aqui para ir ao Instagram
          </Link>
        </p>,
      ],
    },
    {
      title: "Telefone/Whatsapp",
      messages: [
        <p key="1">
          <FaWhatsapp className="inline mb-0.5" /> (71) 9 9754-6608
        </p>,
        <p key="2">
          <Link href="https://wa.me/5571997546608" target="_blank" className="hover:underline text-text-950">
            Clique aqui para ir ao WhatsApp
          </Link>
        </p>,
      ],
    },
  ];
const page = () => {
    

  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-background-50"
    >
        <div className="flex flex-col container mx-auto py-12 xl:py-0 bg-background-50">
            <h1 className="text-xs sm:text-lg md:text-4xl font-semibold uppercase text-text-950 text-center">
                Contatos
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
                {/* Formulário */}
                <div className="w-[300px] sm:w-[400px] pt-4">
                    <ContactForm />
                </div>
                {/* Contatos */}
                <div className="w-[300px] sm:w-[400px] flex flex-col items-start justify-between border-l-4 border-text-950 pl-1 xl:pl-4 gap-4">
                    {
                        ContactMessages.map((message, index) => (
                            <div key={index} className="flex flex-col items-start justify-center gap-0.5 xl:gap-1">
                                <h2 className="text-xs md:text-sm xl:text-lg font-semibold text-text-950">{message.title}</h2>
                                <div className="text-background-950 text-xs md:text-md xl:text-xl flex flex-col  gap-0.5">
                                    {message.messages}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default page
