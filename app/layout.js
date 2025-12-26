import { Analytics } from '@vercel/analytics/next'
import Header from "@/Components/Header";
import "./globals.css";

export const metadata = {
  title: "Abdul Shakoor–Web Developer Portfolio",
  description: "Professional freelance web developer with React, PHP, and MySQL experience. View projects and hire me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#071013] text-white gap-40">
      <body>
        <Header />
        <Analytics />

        {children}
      </body>
    </html>
  );
}
