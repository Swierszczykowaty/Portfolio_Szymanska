import { useEffect, useState } from "react";
import Image from 'next/image';
import contactData from '../../text/contact.json';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  return (
    <>
      <div className="w-full g-fuchsia-100 flex items-center flex-grow sm:h-[calc(100vh-445px)]">
        <div className='flex flex-col w-full h-full gap-10'>
          <div className='w-full h-[150px] md:h-[250px]'>
            <Image
              className="h-full w-full object-cover bg-center"
              src="/photos/concert/1.webp"
              alt="Me"
              width={900}
              height={600}
            />
          </div>
          <div className="text-black flex flex-col">
            <div className="flex flex-col">
              <p className="italic text-xl font-normal">{contactData.title}</p>
              <p className="text-2xl font-medium">{contactData.subtitle}</p>
            </div>
            <p className="text-[14px] md:text-[16px] text-base mt-6 leading-loose tracking-wide text-justify">
              {contactData.paragraph}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-evenly p-6 text-stone-800">
            <div className="flex items-center justify-center p-2 ">
              <FaPhoneAlt className="w-6 h-6 sm:w-8 sm:h-8 "/>
              <p className="text-xl sm:text-2xl ml-4">
                342 234 234
              </p>
            </div>
            <div className="flex items-center  justify-center p-2 ">
              <MdEmail className="w-8 h-8 sm:w-10 sm:h-10 "/>
              <p className="text-xl sm:text ml-4 ">
                karina@szymanksa.pl
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
