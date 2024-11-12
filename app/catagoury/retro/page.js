import React from 'react';
import { client } from '@/lib/client';
import Product from '@/components/Product';

const Retro = ({ allKidsProducts }) => {
  return (
    <div className="products-container2 flex flex-wrap justify-center gap-4 mt-28 w-full">
      {allKidsProducts?.map((prod) => (
        <Product key={prod._id} product={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[category == "Kids"]';
  const allKidsProducts = await client.fetch(query);

  return {
    props: {
      allKidsProducts,
    },
  };
};

export default Retro;