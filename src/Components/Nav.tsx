
import Link from "next/link";

export default function Nav() {

  return (
    <nav className="sticky top-0 bg-emerald-600">
      <div className="flex gap-10 p-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/portfolio_dogs">Portfolio Dogs</Link>
      </div>
    </nav>
  );
}
