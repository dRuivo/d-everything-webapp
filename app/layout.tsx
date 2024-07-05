import type { Metadata } from "next";
import { inter } from "@/app/_ui/fonts";
import "./globals.css";
import NavBar from "@/app/_ui/nav-bar";
import Footer from "@/app/_ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    <html lang="en" data-theme="light" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full justify-between`}>  
        {/* TODO: select default font */}
        <div className="flex-none p-6">
          <NavBar />
        </div>
        <div className="grow py-6 md:px-36 px-6">
          {children}
          <SpeedInsights />
        </div>
        <div className="flex-none py-8 md:px-36 px-6 bottom-0">
          <Footer />  
        </div>
      </body>
    </html>   
  );
}
