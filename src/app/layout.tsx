import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Index from "./index"
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>

        {children}

      </body>
    </html>
  );
}
