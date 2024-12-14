import Footer from "@/Components/footer";
import Wrapper from "@/Components/Wrapper";
import Nav from "@/Components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="bg-stone-900">
        <Nav/>
        <Wrapper>{children}</Wrapper>
        <Footer />
      </main>
    </>
  );
}
