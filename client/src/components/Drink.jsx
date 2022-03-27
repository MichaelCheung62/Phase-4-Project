import React from 'react';

function Drink({ addDrinkToOrder, drink }) {
  return (
    <div>
      <div>{drink.name}</div>
      <div>{drink.price}</div>
      <button onClick={(e) => addDrinkToOrder(drink)}>Add</button>
    </div>
  );
}

export default Drink;
