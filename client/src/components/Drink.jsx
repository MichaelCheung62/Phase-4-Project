import React from 'react';

function Drink({ addDrinkToOrder, drink }) {
  return (
    <div  >
      <div>{drink.name} - ${drink.price}</div>
      <button onClick={(e) => addDrinkToOrder(drink)}>Add</button>
      {/* <hr/> */}
    </div>
  );
}

export default Drink;
