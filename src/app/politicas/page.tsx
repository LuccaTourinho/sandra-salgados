'use client';

import { motion } from "framer-motion";

interface privacyPolicy {
    title: string;
    description: string;
}

const privacyPolicy: privacyPolicy[] = [
    {
        title: "Coleta de Dados",
        description: "Usamos as informações apenas para processar pedidos e nos comunicar com você.",
    },
    {
        title: "Proteção de dados",
        description: "Todas as informações são armazenadas de forma segura, evitando acessos não autorizados.",
    },
    {
        title: "Compartilhamento",
        description: "Não compartilhamos suas dados com terceiros, exceto se exigido por lei.",
    },
    {
        title: "Seus direitos",
        description: "Pode entrar em contato conosco em qualquer momento para corrigir ou excluir suas informacões.",
    },
]

const page = () => {
  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-background-50"
    >
        <div className="container mx-auto flex flex-col 2xl:flex-row items-start justify-center gap-4 h-full">
            {/* Política de privacidade */}
            <div className="flex flex-col p-3  lg:w-[500px] items-start flex-start gap-4 h-full">
                <h1 className="text-xs sm:text-lg md:text-2xl font-semibold text-text-950">Política de Privacidade</h1>
                <p className="text-sm sm:text-md lg:text-lg text-wrap">
                    Aqui na Sandra Salgados, respeitamos a sua privacidade e nos 
                    comprometemos a proteger suas informações. Solicitamos dados 
                    pessoais apenas quando necessário para atender ao seu pedido ou 
                    melhorar sua experiência conosco.
                </p>
                <div className="flex flex-col items-start justify-center gap-3">
                    {privacyPolicy.map((privacy, index) => (
                        <div key={index} className="flex flex-col items-start justify-start gap-0.5">
                            <h2 className="text-md sm:text-lg lg:text-xl font-semibold text-text-950">{privacy.title}:</h2>
                            <p className="text-xs sm:text-md lg:text-lg text-wrap">{privacy.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-start justify-start gap-0.5">
                    <p className="text-xs sm:text-md lg:text-lg text-wrap">Dúvidas sobre privacidade? </p>
                    <p className="text-xs sm:text-md lg:text-lg text-wrap">Estou à disposição para ajudar pelo WhatsApp ou e-mail.</p>
                </div>
            </div>
            {/* Política de devolucoes e trocas */}
            <div className="flex flex-col p-3  lg:w-[500px] items-start flex-start gap-4 h-full">
                <h1 className="text-xs sm:text-lg md:text-2xl font-semibold text-text-950">Política de Devoluções e Trocas</h1>
                <div className="flex flex-col justify-between items-start h-full gap-2">
                    <p className="text-xs sm:text-md lg:text-lg text-wrap">
                    Entendemos que imprevistos podem acontecer, e estamos 
                    aqui para garantir que você tenha a melhor experiência possível.
                    </p>
                    <div className="flex flex-col items-start justify-start gap-1 ">
                        <h1 className="text-md sm:text-lg lg:text-xl font-semibold text-text-950">
                            Desistência de Pedido
                        </h1>
                        <p className="text-md sm:text-lg lg:text-xl text-text-950">Você pode cancelar seu pedido até 24 horas após o recebimento. </p>
                        <p className="text-md sm:text-lg lg:text-xl text-text-950">Para isso:</p>
                        <ul className="list-disc pl-5">
                            <li className="text-xs sm:text-md lg:text-lg text-wrap">
                                Entre em contato pelo WhatsApp (71) 98754-6608 
                                ou e-mail sandratourinho@gmail.com, 
                                de segunda a sexta, das 08:00 às 18:00.
                            </li>
                            <li className="text-xs sm:text-md lg:text-lg text-wrap">
                                Certifique-se de que os produtos estejam na embalagem original, 
                                sem danos, e com a nota fiscal em mãos.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                        <h1 className="text-md sm:text-lg lg:text-xl font-semibold text-text-950">
                            Trocas por Erro
                        </h1>
                        <p className="text-xs sm:text-md lg:text-lg text-wrap">
                            Se algo não estiver de acordo com seu pedido 
                            (quantidade ou tipo de produto), não se preocupe!
                        </p>
                        <ul className="list-disc pl-5">
                            <li className="text-xs sm:text-md lg:text-lg text-wrap">
                                Entre em contato imediatamente pelo WhatsApp ou e-mail.
                            </li>
                            <li className="text-xs sm:text-md lg:text-lg text-wrap">
                                Organizaremos a troca ou oferecemos um estorno, 
                                dependendo do caso.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default page
