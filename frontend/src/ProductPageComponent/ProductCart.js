import React from "react";
import { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import { useStateValue } from "../StateProvider";

function ProductCart({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('/cart', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    const items = await data.json();
    setItems(items);
  };

  const removeItem = async(item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id
    });

    const res = await fetch('/deletecart',{
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          item
      }),
      credentials: "include"
  });

  const data = await res.json();

  console.log(item);

  }
  return (
    <div>
      {
        items.map(item => (
          <div className="productcart">
            <img src={image} className="productcart_image" alt="" />
            <div className="productcart_info">
              <p className="productcart_title">{item.productname}</p>
              <p>
                <FaIcons.FaRupeeSign />
                {item.productprice}
              </p>
              {/* <div className="productcart_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div> */}

              <button onClick={() => removeItem(item)}>Remove from the Cart</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ProductCart;


{/* <div className="productcart">
        <img src={image} className="productcart_image" alt="" />
        <div className="productcart_info">
          <p className="productcart_title">{title}</p>
          <p>
            <FaIcons.FaRupeeSign />
            {price}
          </p>
          {/* <div className="productcart_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div> */}

      //     <button onClick={removeItem}>Remove from the Cart</button>
      //   </div>
      // </div> */}