import Header from "@/Components/Header";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' bg-[#071013] text-white gap-40'>
      <body >
        <Header/>
        {children}
     
      </body>
    </html>
  );
}
