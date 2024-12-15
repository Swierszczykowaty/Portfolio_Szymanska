import Footer from "@/components/FooterComp";
import Wrapper from "@/components/WrapperComp";
import Nav from "@/components/NavComp";

type Props = {
  children:React.ReactNode,
  modal:React.ReactNode
}

export default function Layout({children, modal}: Props) {  
  return (
    <>
      <main className="">
        <Nav/>
        {modal}
        <Wrapper>{children}</Wrapper>
        <Footer />
      </main>
    </>
  );
}
