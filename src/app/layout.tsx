

import "./globals.css";

import { Montserrat } from 'next/font/google';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { GlobalContextProvider } from "./context/store";



const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
});

export const metadata = {
  title: "Ted",
  description: "Ted website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <body className={montserrat.className}>
        <GlobalContextProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );

  
}
