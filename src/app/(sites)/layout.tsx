import Footer from "@/components/FooterComp";
import Wrapper from "@/components/WrapperComp";
import Nav from "@/components/NavComp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <>
      <main className="">
        <Nav/>
        <Wrapper>{children}</Wrapper>
        <Footer />
      </main>
    </>
  );
}
