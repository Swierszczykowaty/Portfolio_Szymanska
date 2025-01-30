'use client';
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer_comp = () => {
    const pathname = usePathname();
    const isConcertPage = pathname === "/portfolio/koncerty";

    const facebookLink = isConcertPage
        ? "https://www.facebook.com/profile.php?id=61558159477316&rdid=LtTf6g8SsIFLGtwo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15Ahm9eno1%2F#" // Zmieniony link dla strony koncertowej
        : "https://www.facebook.com/share/19SDkoN7r9/";
    
    const instagramLink = isConcertPage
        ? "https://www.instagram.com/szymanska_concerts_/" // Zmieniony link dla strony koncertowej
        : "https://www.instagram.com/karina_szymanska_photography/";

    return (
        <>  
        <div className={`flex flex-col ${isConcertPage ? 'text-white' : 'text-slate-400'} justify-center p-20 items-center`}>
            <div className="flex gap-[60px] mb-4 md:mb-6">
                <a 
                    href={facebookLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaSquareFacebook className="cursor-pointer h-5 w-5 md:h-7 md:w-7" />
                </a>
                <a 
                    href={instagramLink} 
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