import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { inter } from "./_lib/fonts";

export const metadata: Metadata = {
  title: "Sandro Luz Tattoo Shop",
  description: "Página oficial da Sandro Luz Tattoo Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-zinc-900 text-white flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <div className="container bottom-0 flex flex-col flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
