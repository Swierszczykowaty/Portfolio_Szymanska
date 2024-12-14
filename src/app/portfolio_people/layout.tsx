import Footer from "@/Components/footer";
import Wrapper from "@/Components/Wrapper";
import Nav from "@/Components/nav";

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
