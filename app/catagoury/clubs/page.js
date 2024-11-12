import React from 'react';
import { client } from '@/lib/client';
import Product from '@/components/Product';

const Clubs = ({ allMaleProducts }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-28 w-full">
      {allMaleProducts?.map((item) => (
        <Product key={item._id} product={item} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[category == "Male"]';
  const allMaleProducts = await client.fetch(query);

  return {
    props: {
      allMaleProducts,
    },
  };
};

export default Clubs;