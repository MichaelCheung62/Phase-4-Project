import React, { useEffect, useState } from 'react';
import DrinkList from './DrinkList';

function Home() {
  const [drinks, setDrinks] = useState([]);
  const [drinkOrders, setDrinkOrders] = useState([]);
  const [customer, setCustomer] = useState('');
  useEffect(
    () =>
      fetch('/drinks')
        .then((r) => r.json())
        .then((data) => setDrinks(data)),

    []
  );
  const addDrinkToOrder = (drink) => {
    setDrinkOrders([...drinkOrders, drink]);
  };

  const submitOrder = async () => {
    console.log(drinkOrders);
    const response = await fetch('/customers', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ name: customer }),
    });

    const currentCustomer = await response.json();

    fetch('/orders', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        customer: currentCustomer.id,
        drinks: drinkOrders,
      }),
    });
  };
  return (
    <div>
      <input onChange={(e) => setCustomer(e.target.value)}></input>
      <DrinkList drinks={drinks} addDrinkToOrder={addDrinkToOrder} />
      <button onClick={submitOrder}>Create Order</button>
    </div>
  );
}

export default Home;
