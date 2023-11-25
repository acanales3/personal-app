import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Canales Personal Portfolio",
  description: "Peronsal website created by Alex Canales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon32.png" sizes="any" />
      <body className={inter.className}>
        <Navbar />
        <main>
          <Suspense>{children}</Suspense>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
