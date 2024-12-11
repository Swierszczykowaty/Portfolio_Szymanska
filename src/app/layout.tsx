import "./globals.css";

import {Host_Grotesk} from 'next/font/google'

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'], // Dodaj odpowiednie subsety
  weight: ['300', '400', '500', '600', '700', '800'], // Wszystkie dostępne wagi
  style: ['normal', 'italic'], // Jeśli italic jest obsługiwany
  display: 'swap',
  variable: '--font-host-grotesk', // Użyj poprawnej zmiennej
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hostGrotesk.variable}`}>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}
