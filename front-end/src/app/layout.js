import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata = {
  title: "Exam Prep",
  description: "AI-powered exit exam preparation tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
