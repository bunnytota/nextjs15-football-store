import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container bg-gray-200 rounded-xl py-16 md:py-24 relative w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="beats-solo text-base absolute top-12 sm:top-28">{heroBanner.smallText}</p>
        <h3 className="text-3xl sm:text-5xl mt-8">{heroBanner.midText}</h3>
        <h1 className="text-4xl sm:text-6xl text-white uppercase mt-2 absolute top-40 sm:top-52">
          {heroBanner.largeText1}
        </h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image absolute top-[7%] right-[20%] w-[450px] h-[450px]"
        />
        <div className="absolute top-[60%] sm:top-[65%] left-8 sm:left-12">
          <Link href={`/product/${heroBanner.product}`}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-medium">
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="desc text-right mt-4 sm:mt-8 w-full sm:w-[300px] text-gray-600">
            <h5 className="font-bold text-base mb-2 text-right">Description</h5>
            <p className="text-sm font-light">{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;