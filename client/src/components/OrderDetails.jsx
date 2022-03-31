import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const [order, setOrder] = useState(null);
  const [customerName, setCustomerName] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetch(`/orders/${id}`)
      .then((r) => r.json())
      .then((data) => setOrder(data));
  }, []);

  const deleteDrink = (orderId) => {
    fetch(`/orders/${orderId}`, {
      method: 'DELETE',
    });

    const filteredOrder = {
      ...order,
      drinks: order.drinks.filter((drinkOrder) => drinkOrder.id !== orderId),
    };

    setOrder(filteredOrder);
  };

  const updateName = () => {
    fetch(`/orders/${order.customer.id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({
        name: customerName,
      }),
    })
      .then((r) => r.json())
      .then((data) => alert(`Updated name to "${data.name}"`));
  };

  if (!order) return <h2>Loading order</h2>;

  return (
    <div>
      <div>
        <input
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder={order.customer.name}
          value={customerName}
        />
        <button onClick={updateName}>Update Name</button>
      </div>
      <div>Number of Drinks: {order.drinks.length}</div>
      <div>
        Total:
        {order.drinks.reduce(
          (previous, { drink: { price } }) => previous + price,
          0
        )}
      </div>
      {order.drinks.map((drinkOrder, index) => (
        <div key={index}>
          {drinkOrder.drink.name} - ${drinkOrder.drink.price}
          <button onClick={() => deleteDrink(drinkOrder.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default OrderDetails;
