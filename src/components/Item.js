import React from 'react';

const Item = ({ item, onAddToCart }) => {
  const handleButtonClick = () => {
    onAddToCart(item.id);
  };

  return (
    <li className={item.inCart ? 'in-cart' : ''}>
      {item.name}
      <button onClick={handleButtonClick}>
        {item.inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;
