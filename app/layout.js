// app/layout.js
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components';
import { StateContext } from '@/context/StateContext';
import localFont from "next/font/local";
import "./globals.css";

// Font setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata = {
  title: 'MR-store',
  description: 'Your ultimate shopping destination',
  icons: {
    icon: '/store5.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <StateContext>
          <div className="layout min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Toaster />
          </div>
        </StateContext>
      </body>
    </html>
  );
}