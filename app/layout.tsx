import type { Metadata } from "next";
import { inter } from "@/app/_ui/fonts";
import "./globals.css";
import NavBar from "@/app/_ui/nav-bar";

export const metadata: Metadata = {
  title: "dRuivo a Nextjs Adventure",
  description: "My Next.js adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>  
        {/* TODO: select default font */}
        <div className="flex w-screen p-6">
          <NavBar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </body>
    </html>   
  );
}
