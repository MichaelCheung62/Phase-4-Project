import React from 'react';
import menu from './menu.jpg';

function Menu() {
  return (
    <div>
      <div>
        <img src={menu} alt="" id="menu" />
      </div>
    </div>
  );
}

export default Menu;
// style={{ backgroundImage: { menu } }}
