"use client"
import { ToastContainer } from "react-toastify";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Coffee'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ToastContainer></ToastContainer>
        {children}
      </body>
    </html>
  );
}
