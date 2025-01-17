'use client';
import Image from 'next/image';
import contactData from '@/database/contact.json';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const Contact = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".contactPhoto",
      { opacity:0, x:-50 },
      {
        opacity:1,
        x:0,
        duration: 1.3,
      }
    );
    gsap.fromTo(
      ".contactTxt",
      { opacity:0, x:50 },
      {
        opacity:1,
        x:0,
        duration: 1.3,
      }
    );
    gsap.fromTo(
      ".contactTxt2",
      { opacity:0, y:-50 },
      {
        opacity:1,
        y:0,
        duration: 1.3,
      }
    );
  },
[]);
  return (
    <>
      <div className="w-full g-fuchsia-100 flex items-center flex-grow 2xl:h-[calc(100vh-486px)]">
        <div className='flex flex-col w-full h-full gap-8 justify-center'>
          <div className='relative contactPhoto w-full h-[150px] md:h-[200px]'>
            <Image
              className="h-full w-full object-cover"
              src="/photos/dogs/IMG_005.jpg"
              alt="ContactPhoto"
              fill
              draggable={false}
            />
          </div>
          <div className="contactTxt text-black flex flex-col">
            <div className="flex flex-col">
              <p className="italic text-xl font-normal">{contactData.title}</p>
              <p className="text-2xl font-medium">{contactData.subtitle}</p>
            </div>
            <p className="text-[14px] md:text-[16px] text-base mt-6 leading-loose tracking-wide text-justify">
              {contactData.paragraph}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-evenly p-6 text-stone-800">
            <div className="contactTxt2 flex items-center justify-center p-2 ">
              <FaPhoneAlt className="w-6 h-6 sm:w-8 sm:h-8 "/>
              <p className="text-xl sm:text-2xl ml-4">
              {contactData.number}
              </p>
            </div>
            <div className="contactTxt2 flex items-center  justify-center p-2 ">
              <MdEmail className="w-8 h-8 sm:w-10 sm:h-10 "/>
              <p className="text-xl sm:text ml-4 ">
              {contactData.mail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
