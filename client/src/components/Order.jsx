import React from 'react';
import { Link } from 'react-router-dom';

function Order({ order }) {
  return (
    <div>
      <h2>{order.customer.name}</h2>
      <div>Drinks: {order.drinks.length}</div>
      <div>
        Total:
        {order.drinks.reduce(
          (previous, { drink: { price } }) => previous + price,
          0
        )}
      </div>
      <Link to={`/orders/${order.customer.id}`}>View order</Link>
    </div>
  );
}

export default Order;
