import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageTrasition from "@/components/PageTrasition";
import StairTrasition from "@/components/StairTrasition";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// Definição da fonte local Roboto
const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "400",
  display: "swap", 
});

// Definição da fonte local Suwannaphum
const suwannaphum = localFont({
  src: "./fonts/Suwannaphum-Regular.ttf",
  variable: "--font-suwannaphum",
  weight: "400",
  display: "swap",
});

// Configuração dos metadados para SEO e descrição do site
export const metadata: Metadata = {
  title: {
    default: "Sandra Salgados",
    template: "%s | Sandra Salgados",
  },
  description: "Site para a confeitaria Sandra Salgados",
  applicationName: "Sandra Salgados",
};

// Componente principal que define o layout da aplicação
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${suwannaphum.variable} antialiased`}
      >
        <Header />
        <StairTrasition />
        <PageTrasition>
          {children}
        </PageTrasition>
        <Footer />
      </body>
    </html>
  );
}
