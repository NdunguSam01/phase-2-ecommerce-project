import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = ({ products }) => {
  const productItems = products.map((product) => (
    <div key={product.id}>
      <NavLink to={`/items/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
      </NavLink>
    </div>
  ));

  return (
    <>
      <h1>Home Page</h1>
      {productItems}
    </>
  );
};

export default Home;
