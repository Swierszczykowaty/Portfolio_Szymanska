import "./globals.css";

import {Host_Grotesk} from 'next/font/google'

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'], 
  style: ['normal', 'italic'], 
  display: 'swap',
  variable: '--font-host-grotesk', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${hostGrotesk.variable}`}>
      <body className="font-sans">
      <title>Karina Szymańska - Portfolio</title>
        <meta
          name="description"
          content="Portfolio z moimi pracami fotograficznymi. Karina Szymańska"
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
