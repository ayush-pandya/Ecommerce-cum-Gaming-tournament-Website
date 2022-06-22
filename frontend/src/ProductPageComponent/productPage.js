import React from "react";
import Sidebar from "./Sidebar";
import Product from "./Product";
import ProductPageData from "./ProductPageData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../HomePageComponent/Header";
// import axios from "../axios";
import { useState, useEffect, useRef } from "react";

function ProductPage() {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   const url = `api/v1/${type}`;
  //   axios.get(url).then((res, err) => {
  //     // console.log(res.data.product)
  //     const abc = res.data.product.map((item, index) => {
  //       return (
  //         <Product
  //           id={item.id}
  //           title={item.title}
  //           price={item.price}
  //           rating={item.rating}
  //           description={item.description}
  //           // image={item.image[0].url}
  //         />
  //       );
  //     });
  //     setList(abc);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const [items, setItems] = useState([]);

  // const fetchItems = async () => {
  //   const data = await fetch('/product', {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     credentials: "include"
  //   });
  //   const items = await data.json();
  //   setItems(items);
  // };

 
  return (
    <div className="product_page">
      <Header />
      <Sidebar />
      <Product />
      {/* <div>{                                                                                   
            items.map(item => (
                <p>{item._id} {item.productname} {item.productprice}  {item.producttype} <button>
                Add to cart
              </button></p>
            ))
          }
        </div> */}
    </div>
  );
}


{/* {                                                                                   
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
    <button onClick={addToCart}>Add to Cart</button>
  </div>
  ))
} */}

export default ProductPage;
