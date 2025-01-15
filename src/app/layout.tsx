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
      <head>
        <title>Karina Szymańska Fotografia</title>
        <meta
          name="description"
          content="Portfolio z moimi pracami fotograficznymi. Karina Szymańska"
        />
        <link rel="icon" href="/logo/fav_icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}

