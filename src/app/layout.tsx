import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./layout/Header/Header";
import { Footer } from "./layout/Footer/Footer";
import { MainContextProvider } from "./context";

const angelicaProDisplay = localFont({
  src: "../../public/fonts/AngleciaProDisplay-Regular.otf",
  display: "block",
});

export const metadata: Metadata = {
  title: "WatchGenius",
  description: "Keep track of your favorite watches and discover new ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${angelicaProDisplay.className}`}>
      <body>
        <main>
          <Header />
          <MainContextProvider>{children}</MainContextProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
