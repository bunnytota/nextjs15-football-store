// ImageGrid.js
import Image from 'next/image';
import React from 'react';

const ImageGrid = () => {
  const itemData = [
    {
      img: '/assets/roanldo_alnasser.webp',
      title: 'Club',
    },
    {
      img: '/assets/ronaldo_portugal.webp',
      title: 'International',
    },
    {
      img: '/assets/ronaldo_manutd.jpg',
      title: 'Retro',
    },
    {
      img: '/assets/ronaldo_all.jfif',
      title: 'See more',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[1200px] mx-auto px-2 sm:px-0">
      {itemData.map((item) => (
        <div
          key={item.img}
          className="relative w-full aspect-square overflow-hidden rounded-md"
        >
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-orange-400 font-bold text-lg px-4 py-2 rounded-md">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;