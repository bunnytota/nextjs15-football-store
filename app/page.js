'use client';

import React from 'react';
import { client } from '../lib/client';
import { 
  Product, 
  FooterBanner, 
  HeroBanner, 
  Box, 
  Carousel, 
  Footer 
} from '../components';

const Home = ({ products, bannerData }) => (
  <main className="min-h-screen">
    {/* Top Margin */}
    <div className="mt-[75px]" />
    
    {/* Carousel Section */}
    <Carousel />
    
    {/* Category Heading */}
    <div className="text-center my-10">
      <h2 className="flex justify-center items-center m-0 p-0 mt-10 mb-8 text-4xl font-extrabold text-[#324d67]">
        Choose your Category
      </h2>
    </div>
    
    {/* Category Box */}
    <Box />
    
    {/* Hero Banner */}
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    
    {/* Products Section */}
    <div className="text-center my-10 text-[#324d67]">
      <h2 className="text-4xl font-extrabold">
        NEW Stock
      </h2>
      <p className="text-base font-light">
        Find every unique product and buy
      </p>
    </div>
    
    {/* Products Grid */}
    <div className="flex flex-wrap justify-center gap-4 mt-5 w-full">
      {products?.map((product) => (
        <Product 
          key={product._id} 
          product={product} 
        />
      ))}
    </div>
    
    {/* Footer */}
    <Footer/>
  </main>
);

// Server-side Data Fetching
export async function getServerSideProps() {
  try {
    const [products, bannerData] = await Promise.all([
      client.fetch('*[_type == "product"]'),
      client.fetch('*[_type == "banner"]')
    ]);

    return {
      props: { 
        products, 
        bannerData 
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { 
        products: [], 
        bannerData: [] 
      }
    };
  }
}

export default Home;