import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>FULLTIMEFORCE ASSESSMENT</title>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
