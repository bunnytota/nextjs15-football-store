// Carousel.js
import React, { useState, useEffect, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const CarouselSlide = memo(({ slide, currentSlide }) => {
  return (
    <div className="flex-shrink-0 w-full h-full relative">
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="text-center w-full px-5 max-w-[600px] mx-auto">
          <h2 className="text-[clamp(1.2rem,4vw,2rem)] font-bold mb-2 text-orange-500 w-full">
            {slide.title}
          </h2>
          <p className="text-[clamp(0.9rem,3vw,1.2rem)] text-orange-400 w-full leading-relaxed">
            {slide.description}
          </p>
        </div>
      </div>
    </div>
  );
});

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/assets/carousel1.jpg',
      title: 'Special Offer',
      description: 'Get 50% OFF on all items',
    },
    {
      image: '/assets/carousel2.jpg',
      title: 'Mega Sale',
      description: 'End of Season Sale - Up to 70% OFF',
    },
    {
      image: '/assets/carousel5.jpg',
      title: 'Premium Quality',
      description: 'Discover our premium collection',
    },
    {
      image: '/assets/carousel3.jpg',
      title: 'New Arrivals',
      description: 'Check out our latest collection',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px]">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <CarouselSlide key={index} slide={slide} currentSlide={currentSlide} />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-50 w-9 h-9 rounded-full border-none cursor-pointer transition-colors duration-300 flex items-center justify-center left-2.5"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-50 w-9 h-9 rounded-full border-none cursor-pointer transition-colors duration-300 flex items-center justify-center right-2.5"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 bg-white bg-opacity-60 rounded-full border-none cursor-pointer transition-all duration-300 p-0 ${
                currentSlide === index ? 'bg-orange-500 w-5 rounded-3xl' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;