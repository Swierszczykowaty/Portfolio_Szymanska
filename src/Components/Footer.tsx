import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <>  
        <div className="bg-white flex flex-col text-slate-400 justify-center h-44 items-center">
            <div className="flex gap-[60px] mb-4">
                <a 
                    href="https://www.facebook.com/share/19SDkoN7r9/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaSquareFacebook className="cursor-pointer h-8 w-8" />
                </a>
                <a 
                    href="https://www.instagram.com/karina_szymanska_photography/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="cursor-pointer h-8 w-8" />
                </a>
            </div>
            <p className='flex'>Copyright &copy; {new Date().getFullYear()} Karina Szymańska</p>
        </div>
        </>
    );
}

export default Footer;
