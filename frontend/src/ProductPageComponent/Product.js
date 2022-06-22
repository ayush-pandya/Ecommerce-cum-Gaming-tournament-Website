import React from "react";
import { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import { useStateValue } from '../StateProvider'
import ItemPage from './ItemPage'
import Header from "../HomePageComponent/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// function Product({ id, title, image, description, price, rating }) {
  
  function Product({ id, title, image, description, price, rating }) {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [{ cart }, dispatch] = useStateValue()
  const fetchItems = async () => {
    const data = await fetch('/product', {
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

  const clickMe = async(item) => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });

    const res = await fetch('/cart',{
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

};

  return (
    <div>

      {
        items.map(item => (
          <div className="product">

            <img onClick={ItemPage} className="product_img" src={image} alt="" />
            <div className="product_info">
              <span>{item.productname}</span>
              <p className="product_price">
                <strong>
                  Price: <FaIcons.FaRupeeSign />
                  {item.productprice}
                </strong>
              </p>
              <p className="product_rating">
                Rating :
                {Array(rating)
                  .fill()
                  .map((_) => (
                    <span>⭐</span>
                  ))}
              </p>
            </div>
            <div className="product_description">
              <span>Product Description</span>
              <p>{item.productdesc}</p>
            </div>
            <button onClick={() => clickMe(item)}>Add to Cart</button>
          </div>
        ))
      }

      {/* <div className="product">

        <img onClick={ItemPage} className="product_img" src={image} alt="" />
        <div className="product_info">
          <span>{title}</span>
          <p className="product_price">
            <strong>
              Price: <FaIcons.FaRupeeSign />
              {price}
            </strong>
          </p>
          <p className="product_rating">
            Rating :
            {Array(rating)
              .fill()
              .map((_) => (
                <span>⭐</span>
              ))}
          </p>
        </div>
        <div className="product_description">
          <span>Product Description</span>
          <p>{description}</p>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div> */}
    </div>
  );
}

export default Product;
