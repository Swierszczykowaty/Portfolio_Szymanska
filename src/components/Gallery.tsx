/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { usePathname } from "next/navigation"; 
gsap.registerPlugin(useGSAP);
import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
    images: string[];
    name: string[];
};

const Gallery = ({ images, name }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [currentImageSrc, setCurrentImageSrc] = useState(''); 
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    const [showScrollUp, setShowScrollUp] = useState(false);
    const pathname = usePathname();
    const isConcertPage = pathname === "/portfolio/koncerty";
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollUp(window.scrollY > 400); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openModal = (photo: string, index: number) => {
        setCurrentImageSrc(photo);
        setCurrentImageIndex(index);
        setIsModalOpen(true); // Modal becomes visible
    };
    
    useEffect(() => {
        if (isModalOpen) {
            gsap.fromTo(
                ".modal",
                { scale: 0.8, },
                { scale: 1, duration: 0.6, ease: "power2.out" }
            );
            gsap.fromTo(
                ".bgmodal",
                { opacity: 0 },
                { opacity: 1, duration: 0.8, ease: "power2.out" }
            )
        }
    }, [isModalOpen]);

    const closeModal = () => {
        gsap.to(".modal",
          {
          scale: 0.9,
          opacity:0,
          duration: 0.6,
          ease: "power2.in",
          onComplete: () => setIsModalOpen(false),
        });
        gsap.fromTo(
            ".bgmodal",
            { opacity: 1 },
            { opacity: 0, duration: 0.6 }
        )
      };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageSrc(images[prevIndex]);
        setCurrentImageIndex(prevIndex);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageSrc(images[nextIndex]);
        setCurrentImageIndex(nextIndex);
    };
    useGSAP(() => {
        gsap.fromTo(
          ".galerry",
          { opacity:0, y:50 },
          {
            opacity:1,
            y:0,
            duration: 1.3,
            stagger: 0.02,
          }
        );
      },
    []);

    return (
        <>  
        {/* <h1 className={`mb-6 md:mb-10 md:mt-4 text-black text-[20px] font-medium md:text-[26px] italic ${isConcertPage ? 'text-white' : 'text-stone-900'}`}>{name}</h1> */}
            <div className=" columns-2 md:columns-3 gap-2 md:gap-4 h-full w-full">
                {images.map((photo, index) => (
                    <div key={index} className="relative galerry cursor-pointer mb-2 md:mb-4 w-full h-auto break-inside-auto" onClick={() => openModal(photo, index)}>
                        <Image
                            src={photo}
                            alt={`Image ${index}`}
                            width={300}
                            height={0}
                            sizes="(max-width: 768px) 100vw, 300px"
                            style={{ width: '100%', height: 'auto' }}
                            draggable={false}
                            className='galerry'
                        />
                        <div className='w-full h-full galerry  absolute top-0'>
                            <div className='flex items-center justify-center h-full w-full duration-300 group hover:bg-black/30 z-50'>
                                <FaMagnifyingGlass className='h-6 w-6 text-white absolute md:group-hover:opacity-100 opacity-0  duration-300'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div 
                    className=" fixed bgmodal inset-0 md:p-10 bg-black/90 flex justify-center items-center z-50" 
                    onClick={closeModal}
                >
                    <div className="relative h-full modal w-full">
                        <Image 
                            src={currentImageSrc} 
                            alt="Zoom" 
                            className="w-full h-full object-contain" 
                            fill
                        />
                    </div>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
                        <IoIosArrowDown className="rotate-90 h-10 w-10" />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                        <IoIosArrowDown className="-rotate-90 h-10 w-10" />
                    </button>
                    <button onClick={(e) => {e.stopPropagation(); closeModal();}} className="absolute top-4 right-4 text-white">
                        <IoMdClose className="h-8 w-8" />
                    </button>
                </div>
            )}

            {showScrollUp && (
                <button 
                    onClick={scrollToTop} 
                    className="fixed bottom-4 right-4 text-stone-900 p-3 shadow-md hover:bg-stone-200 transition-transform transform"
                    aria-label="Scroll to top"
                >
                    <IoIosArrowUp className="h-6 w-6" />
                </button>
            )}
        </>
    );
};

export default Gallery;
