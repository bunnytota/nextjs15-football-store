import React from 'react';
import { client } from '@/lib/client';
import Product from '@/components/Product';

const International = ({ allFemaleProducts }) => {
  return (
    <div className=" flex flex-wrap justify-center gap-4 mt-28 w-full">
      {allFemaleProducts?.map((prod) => (
        <Product key={prod._id} product={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[category == "Female"]';
  const allFemaleProducts = await client.fetch(query);

  return {
    props: {
      allFemaleProducts,
    },
  };
};

export default International;