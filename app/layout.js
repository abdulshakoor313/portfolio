import "./globals.css";
import FullBg from '@/Components/FullBg'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <FullBg/>
        {children}
      </body>
    </html>
  );
}
