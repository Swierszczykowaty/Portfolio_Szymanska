import Footer from "@/Components/Footer";
import Wrapper from "@/Components/Wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="">
        <Wrapper>{children}</Wrapper>
      </main>
      <Footer />
    </>
  );
}
