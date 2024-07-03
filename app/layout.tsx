import type { Metadata } from "next";
import { inter } from "@/app/_ui/fonts";
import "./globals.css";
import NavBar from "@/app/_ui/nav-bar";

export const metadata: Metadata = {
  title: {
    template: "%s | dRuivo",
    default: "dRuivo",
  },
  description: "dRuivo a Nextjs Adventure",
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
        <div className="flex p-6">
          <NavBar />
        </div>
        <div className="flex-grow py-6 md:overflow-y-auto md:px-36 px-6">
          {children}
        </div>
      </body>
    </html>   
  );
}
