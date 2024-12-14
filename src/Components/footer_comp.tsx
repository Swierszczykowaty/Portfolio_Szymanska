'use client';
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { usePathname } from "next/navigation"; 

const Footer_comp = () => {
      const pathname = usePathname();
      const isConcertPage = pathname === "/portfolio_concerts";
    return (
        <>  
        <div className={`flex flex-col ${isConcertPage ? 'text-slate-300' : 'text-slate-400'}  justify-center p-20 items-center`}>
            <div className="flex gap-[60px] mb-4 md:mb-6">
                <a 
                    href="https://www.facebook.com/share/19SDkoN7r9/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaSquareFacebook className="cursor-pointer h-5 w-5 md:h-7 md:w-7" />
                </a>
                <a 
                    href="https://www.instagram.com/karina_szymanska_photography/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="cursor-pointer h-5 w-5 md:h-7 md:w-7" />
                </a>
            </div>
            <p className='flex text-sm font-thin text-nowrap'>Copyright &copy; {new Date().getFullYear()} Karina Szymańska</p>
        </div>
        </>
    );
}

export default Footer_comp;
