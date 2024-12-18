import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageTrasition from "@/components/PageTrasition";
import StairTrasition from "@/components/StairTrasition";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "400",
  display: "swap", 
});

const suwannaphum = localFont({
  src: "./fonts/Suwannaphum-Regular.ttf",
  variable: "--font-suwannaphum",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sandra Salgados",
    template: "%s | Sandra Salgados",
  },
  description: "Site para a confeitaria Sandra Salgados",
  applicationName: "Sandra Salgados",
};

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
        <StairTrasition />
        <PageTrasition>
          {children}
        </PageTrasition>
      </body>
    </html>
  );
}
