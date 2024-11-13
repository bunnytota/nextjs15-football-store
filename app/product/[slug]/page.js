// app/product/[slug]/ProductDetails.js
"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { urlFor } from '../../../lib/client';
import Product from '../../components/Product';
import FloaterHome from '../../components/Floaterhome';
import { useStateContext } from '../../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, discount, size } = product;
  const [index, setIndex] = useState(0);
  const [sized, setSized] = useState(null);
  const { decQty, incQty, qty, onAdd, setShowCart, updateSize } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  useEffect(() => {
    console.log('Sized changed:', sized);
    updateSize(sized);
  }, [sized, updateSize]);

  return (
    <div className="relative">
      <div className="product-detail-container flex flex-wrap gap-10 justify-center mt-20 mx-5">
        <div>
          <div className="image-container">
            <img 
              src={urlFor(image && image[index])} 
              className="product-detail-image rounded-xl bg-gray-200 border border-black cursor-pointer transition duration-300 hover:bg-orange-400" 
              alt={name}
            />
          </div>
          <div className="small-images-container flex gap-2 mt-5">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={`small-image rounded-md bg-gray-200 w-[70px] h-[70px] cursor-pointer ${i === index ? 'border-2 border-orange-400' : ''}`}
                onMouseEnter={() => setIndex(i)}
                alt={`${name} ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className="text-gray-700">{name}</h1>
          <div className="reviews flex items-center gap-2 text-orange-400">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-gray-700">(20)</p>
          </div>
          <h4 className="mt-4">Details:</h4>
          <p className="mt-2">{details}</p>
          <p className="price mt-8 text-orange-400 font-bold text-2xl">PKR. {price}</p>
          <h5 className="discount mt-2 text-green-500">{discount}</h5>

          <div className="size mt-4">
            <p>SELECT SIZE</p>
            <ul className="flex gap-2 mt-2">
              {Array.isArray(size) &&
                size.map((item, ind) => (
                  <li
                    key={ind}
                    onClick={() => setSized(item)}
                    className={`cursor-pointer rounded-md px-3 py-1 ${sized === item ? 'bg-orange-400 text-white' : 'bg-gray-200'}`}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>

          <div className="quantity mt-4 flex items-center gap-4">
            <h3>Quantity:</h3>
            <div className="quantity-desc border border-gray-400 rounded-md flex items-center">
              <span className="minus cursor-pointer text-orange-400" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num text-gray-700 text-xl">{qty}</span>
              <span className="plus cursor-pointer text-green-500" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div className="buttons flex gap-6 mt-8">
            <button
              type="button"
              className="add-to-cart bg-white text-orange-400 border border-orange-400 px-5 py-2 rounded-md text-lg font-medium cursor-pointer transform transition duration-500 hover:scale-105"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="buy-now bg-orange-400 text-white px-5 py-2 rounded-md text-lg font-medium cursor-pointer transform transition duration-500 hover:scale-105"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      
      <div className="floaterhome fixed left-[80%] text-orange-400 bottom-[25%] md:bottom-[2%]">
        <FloaterHome />
      </div>
      
      <div className="maylike-products-wrapper mt-20">
        <h2 className="text-center text-gray-700 text-2xl font-medium mb-10">Choose Any Product</h2>
        <div className="marquee overflow-x-hidden">
          <div className="track flex justify-center gap-4 will-change-transform animate-marquee">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;