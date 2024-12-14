'use client';
import { useState, useEffect } from 'react';
import { PhotoAlbum } from "react-photo-album";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import gsap from "gsap";
import { motion } from 'framer-motion';

const photos_dogs = [
  { src: '/photos/dogs/1.webp', width: 600, height: 800, index: 1 },
  { src: '/photos/dogs/4.webp', width: 800, height: 600, index: 2 },
  { src: '/photos/dogs/3.webp', width: 600, height: 800, index: 3 },
  { src: '/photos/dogs/2.webp', width: 800, height: 600, index: 4 },
  { src: '/photos/dogs/5.webp', width: 800, height: 600, index: 5 },
  { src: '/photos/dogs/6.webp', width: 600, height: 800, index: 6 },
  { src: '/photos/dogs/7.webp', width: 800, height: 600, index: 7 },
  { src: '/photos/dogs/8.webp', width: 800, height: 600, index: 8 },
  { src: '/photos/dogs/9.webp', width: 800, height: 600, index: 9 },
];

const Portfolio_dogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Stan modala
  const [currentImageSrc, setCurrentImageSrc] = useState(''); // Źródło zdjęcia do wyświetlenia w modalu
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Indeks bieżącego zdjęcia w modalu
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(false); // Stan kontrolujący animację zdjęć w galerii

  useEffect(() => {
    // Animacja pojawiania się zdjęć w galerii
    gsap.fromTo(
      ".photoAlbumContainer", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );

    // Animacja modala przy otwarciu
    if (isModalOpen) {
      gsap.fromTo(
        ".modal",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
      gsap.fromTo(
        ".modalBlack",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }
  }, [isModalOpen]);

  const closeModal = () => {
    gsap.fromTo(".modal",
      { scale: 1, opacity: 1, duration: 0.5 },
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        onComplete: () => setIsModalOpen(false),
      }
    );
    gsap.fromTo(
      ".modalBlack",
      { opacity: 1, duration: 0.5 },
      { opacity: 0 }
    );
  };

  const openModal = (src: string, index: number) => {
    setCurrentImageSrc(src);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + photos_dogs.length) % photos_dogs.length;
    setCurrentImageSrc(photos_dogs[prevIndex].src);
    setCurrentImageIndex(prevIndex);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % photos_dogs.length;
    setCurrentImageSrc(photos_dogs[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="h-full w-full pt-4">
      <motion.div
        className="photoAlbumContainer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <PhotoAlbum
          photos={photos_dogs}
          columns={(containerWidth) => {
            if (containerWidth < 750) return 2;
            return 3;
          }}
          layout="columns"
          onClick={({ photo, index }) => openModal(photo.src, index)}
        />
      </motion.div>

      {/* Modal z powiększonym zdjęciem */}
      {isModalOpen && (
        <div className="modalBlack fixed inset-0 bg-black/90 flex justify-center items-center z-50 py-16" onClick={closeModal}>
          <div className="relative h-full w-full modal">
            <Image src={currentImageSrc} fill alt="Zoom" className="w-full h-full object-contain" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
            >
              <IoIosArrowDown className='rotate-90 h-10 w-10' />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
              <IoIosArrowDown className='-rotate-90 h-10 w-10' />
            </button>
          </div>
          <div className='bg-red-90 absolute top-0 right-0 m-6 cursor-pointer'>
            <IoMdClose className='text-white h-12 w-12' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio_dogs;
