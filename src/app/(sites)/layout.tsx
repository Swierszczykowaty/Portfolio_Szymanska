import Footer from "@/components/FooterComp";
import Wrapper from "@/components/WrapperComp";
import Nav from "@/components/NavComp";

export default function Layout({children}: {children: React.ReactNode;}) {  
  return (
    <>
      <main>
        <Nav/>
        <Wrapper>{children}</Wrapper>
        <Footer />
      </main>
    </>
  );
}
