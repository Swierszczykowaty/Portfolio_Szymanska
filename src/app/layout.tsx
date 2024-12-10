import "./globals.css";

import {Host_Grotesk} from 'next/font/google'

const HostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  style: ["normal", "italic"],
  display: 'swap',
  variable: '--fontHostGrotesk',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${HostGrotesk.variable}`}>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}
