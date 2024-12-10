import Link from "next/link";

export default function Nav() {

  return (
    <nav className="sticky w-full z-50 bg-fuchsia-100">
      <div className="flex gap-10 h-36 p-10 items-center justify-center text-black">
          <Link href="/">
          <div >
            <img className="h-10" src="/logo/karina_logo.png" alt="logo" />
          </div>
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
