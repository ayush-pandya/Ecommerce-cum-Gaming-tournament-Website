import React from 'react'

function ItemPage({ id, title, image, description, price, rating }) {
  return (
    <div className="item">
      <div className="Left">
              <img src={ image} alt="" />
      </div>
      <div className="Right"></div>
    </div>
  );
}

export default ItemPage
