import "./globals.css";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

import {Host_Grotesk} from 'next/font/google'

const HostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={HostGrotesk.className}>
      <body>
        <Nav/>
        <main>{children}</main>
      </body>
    </html>
  );
}
