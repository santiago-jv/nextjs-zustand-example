"use client"
import { ToastContainer } from "react-toastify";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: {
    template: '%s | Acme',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ToastContainer></ToastContainer>
        {children}
      </body>
    </html>
  );
}
