import React from 'react';
import { useState } from 'react';
import Drink from './Drink';

function DrinkList({ drinks, addDrinkToOrder }) {
  return (
    <div>
      {drinks.map((drink) => (
        <Drink key={drink.id} drink={drink} addDrinkToOrder={addDrinkToOrder} />
      ))}
    </div>
  );
}

export default DrinkList;
