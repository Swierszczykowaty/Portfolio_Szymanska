'use client';

import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';

type Props = {
    images: string[];
};

const Gallery = ({ images }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [currentImageSrc, setCurrentImageSrc] = useState(''); 
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  
    const openModal = (src: string, index: number) => {
        setCurrentImageSrc(src);
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImageSrc('');
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
  
    return (
        <>  
            <div className="columns-2 md:columns-3 gap-6 h-full w-full">
                {images.map((photo, index) => (
                    <div key={index} className="relative mb-6 w-full h-auto bg-blue-500 break-inside-auto" onClick={() => openModal(photo, index)}>
                        <Image
                            src={photo}
                            alt={`Image ${index}`}
                            width={300} // Szerokość kolumny
                            height={0}  // Użyj "layout" do zachowania proporcji
                            sizes="(max-width: 768px) 100vw, 300px"
                            style={{ width: '100%', height: 'auto' }} // Zachowanie ratio
                        />
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black/80 flex justify-center items-center z-50" 
                    onClick={closeModal}
                >
                    <div className="relative h-full w-full">
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
        </>
    );
};

export default Gallery;