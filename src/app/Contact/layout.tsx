import Footer from "@/Components/Footer";
import Wrapper from "@/Components/Wrapper";
import Nav from "@/Components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
