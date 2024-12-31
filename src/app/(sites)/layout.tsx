'use client';
import Footer from "@/components/FooterComp";
import Wrapper from "@/components/WrapperComp";
import Nav from "@/components/NavComp";
import { usePathname } from "next/navigation"; 

export default function Layout({children}: {children: React.ReactNode;}) {  
  const pathname = usePathname();
  const isConcertPage = pathname === "/portfolio/koncerty";
  return (
    <>
      <main className={`${isConcertPage ? 'bg-stone-900' : 'bg-white'}`}>
        <Nav/>
        <Wrapper>{children}</Wrapper>
        <Footer />
      </main>
    </>
  );
}
