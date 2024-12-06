import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 bg-emerald-600">
      <ul className="flex gap-10 p-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
        <li>
          <Link href="/Portfolio_dogs">Portfolio Dogs</Link>
        </li>
      </ul>
    </nav>
  );
}
