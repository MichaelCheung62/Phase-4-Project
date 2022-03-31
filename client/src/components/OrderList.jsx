import React, { useState, useEffect } from 'react';
import Order from './Order';

function OrderList() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    fetch(`/customers`)
      .then((r) => r.json())
      .then((customers) => {
        customers.map((customer) => fetchOrder(customer.id));
      });
  }, []);

  const fetchOrder = (customerId) => {
    fetch(`/orders/${customerId}`)
      .then((r) => r.json())
      .then((data) => {
        const newOrder = { [`${customerId}`]: [data] };
        setOrders((previousOrders) => ({ ...previousOrders, ...newOrder }));
      });
  };

  if (!orders) return <h2>No orders ... </h2>;

  return (
    <div>
      {Object.entries(orders).map((order, index) => {
        if (order[1][0].drinks.length === 0) return false;

        console.log(order[1][0]);

        return <Order key={order[1][0].customer.id} order={order[1][0]} />;
      })}
      
    </div>
  );
}

export default OrderList;
