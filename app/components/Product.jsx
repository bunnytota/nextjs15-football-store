// Product.js
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price, discount } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card cursor-pointer transform scale-100 transition-transform duration-500 ease-in-out hover:scale-110 text-gray-800">
          <img
            src={urlFor(image && image[0])}
            className="product-image rounded-2xl bg-gray-200 transform scale-100 transition-transform duration-500 ease-in-out h-[250px] w-[250px] sm:h-[160px] sm:w-[160px]"
          />
          <p className="product-name font-medium text-base sm:text-xs">
            {name}
          </p>
          <p className="product-price font-bold text-black mt-1">Rs. {price}</p>
          <h5 className="product-discount absolute bottom-1 right-2 text-xs sm:text-[10px]">
            {discount}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Product;