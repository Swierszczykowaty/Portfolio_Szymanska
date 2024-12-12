'use client';
import { useState } from 'react';
import { PhotoAlbum } from "react-photo-album";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';

const photos_dogs = [
  { src: '/photos/dogs/1.webp', width: 600, height: 800 },
  { src: '/photos/dogs/4.webp', width: 800, height: 600 },
  { src: '/photos/dogs/3.webp', width: 600, height: 800 },
  { src: '/photos/dogs/2.webp', width: 800, height: 600 },
  { src: '/photos/dogs/5.webp', width: 800, height: 600 },
  { src: '/photos/dogs/6.webp', width: 600, height: 800 },
];

const Portfolio_dogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Stan modala
  const [currentImageSrc, setCurrentImageSrc] = useState(''); // Źródło zdjęcia do wyświetlenia w modalu
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Indeks bieżącego zdjęcia w modalu

  // Funkcja do otwierania modala z klikniętym zdjęciem
  const openModal = (src: string, index: number) => {
    setCurrentImageSrc(src);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Funkcja do zamykania modala
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageSrc('');
  };

  // Funkcja do przechodzenia do poprzedniego zdjęcia
  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + photos_dogs.length) % photos_dogs.length;
    setCurrentImageSrc(photos_dogs[prevIndex].src);
    setCurrentImageIndex(prevIndex);
  };

  // Funkcja do przechodzenia do następnego zdjęcia
  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % photos_dogs.length;
    setCurrentImageSrc(photos_dogs[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="h-full w-full pt-4">
      <PhotoAlbum
        photos={photos_dogs}
        columns={(containerWidth) => {
          if (containerWidth < 750) return 2; 
          return 3; 
        }}
        layout="columns"

        onClick={({ photo, index }) => openModal(photo.src, index)} 
      />
      {/* Modal z powiększonym zdjęciem */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl h-auto w-auto">
            <Image src={currentImageSrc} fill alt="Zoom" className="w-full h-full object-contain" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
            >
              <IoIosArrowDown className='rotate-90 h-10 w-10'/>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
              <IoIosArrowDown className='-rotate-90 h-10 w-10'/>
              </button>
          </div>
          <div className='bg-red-90 absolute top-0 right-0 m-6 cursor-pointer'>
            <IoMdClose className='text-white h-12 w-12'/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio_dogs;
