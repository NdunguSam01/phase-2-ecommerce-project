import React from 'react';
import { useParams } from 'react-router-dom';

const Item = ({ products }) => {
  const { id } = useParams();
  const selectedItem = products.find((product) => product.id === parseInt(id));

  return (
    <>
      <h1>Item Page</h1>
      {selectedItem ? (
        <>
          <img src={selectedItem.image} alt={selectedItem.name} />
          <p>Name: {selectedItem.name}</p>
          <p>Price: {selectedItem.price}</p>
          <p>Ratings: {selectedItem.ratings}</p>
          {/* Add other details you want to display */}
        </>
      ) : (
        <p>Item not found</p>
      )}
    </>
  );
};

export default Item;
