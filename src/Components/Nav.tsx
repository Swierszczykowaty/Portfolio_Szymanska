import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Nav() {
  return (
    <nav className="sticky w-full z-50 bg-fchsia-50">
      <div className="flex flex-col h-44 p-10 items-center justify-center text-black">
        <Link href="/">
          <div>
            <img className="h-12" src="/logo/karina_logo.png" alt="logo" />
          </div>
        </Link>
        <div className="flex mt-8 gap-16 ">
          <Link href="/about" className="cursor-pointer p-2">
            <h1>O mnie</h1>
          </Link>
          <div className="relative group bg-fuchsi-200 p-2">
            <div className="flex items-center">
              <h1 className="cursor-pointer">Portfolio</h1> 
              <IoIosArrowDown className="ml-4 group-hover:rotate-180 duration-300"/>
            </div>
            <div className="absolute left-1/2 transform duration-300 -translate-x-1/2 top-full w-28 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity pointer-events-none">
              <Link
                href="/portfolio_dogs"
                className="block px-4 py-2 text-black hover:bg-gray-200 rounded-md"
              >
                Pieski
              </Link>
              <Link
                href="/portfolio_cats"
                className="block px-4 py-2 text-black hover:bg-gray-200 rounded-md"
              >
                Ludzie
              </Link>
              <Link
                href="/portfolio_birds"
                className="block px-4 py-2 text-black hover:bg-gray-200 rounded-md"
              >
                Koncerty
              </Link>
            </div>
          </div>
          <Link href="/contact" className="cursor-pointer p-2">
            <h1>Kontakt</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
