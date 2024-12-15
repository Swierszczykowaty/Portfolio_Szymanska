import Footer from "@/Components/footer_comp";
import Wrapper from "@/Components/wrapper_comp";
import Nav from "@/Components/nav_comp";

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
