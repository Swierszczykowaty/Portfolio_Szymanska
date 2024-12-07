import Footer from "@/Components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <main>{children}</main>
        <Footer />
    </>
  );
}
