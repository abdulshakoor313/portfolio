import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#071013] text-white">
      <body >
        {children}
      </body>
    </html>
  );
}
