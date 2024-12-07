import Link from "next/link";

export default function Nav() {

  return (
    <nav className="sticky top-0 bg-black">
      <div className="flex gap-10 p-10 text-white">
          <Link href="/">
            <h1>
              Karina Szymańska
            </h1>
          </Link>
          <Link href="/about">
            <h1>
              O mnie
            </h1>
          </Link>
          <Link href="/contact">
            <h1>
              Kontakt
            </h1>
          </Link>
          <Link href="/portfolio_dogs">
           <h1>
            Portfolio
           </h1>
          </Link>
      </div>
    </nav>
  );
}
