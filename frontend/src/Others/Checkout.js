import React from 'react';

import Subtotal from './Subtotal';
import ProductCart from '../ProductPageComponent/ProductCart'
import { useStateValue } from '../StateProvider'

function Checkout() {
    const [{ cart }] = useStateValue();
    return (
      <div className="checkout">
        <div className="checkout_left">
          {cart.length === 0 ? (
            <div>
              <h2 className="checkout_title">Your shopping basket is empty.</h2>
              <p>You have no items in your basket. Buy One</p>
            </div>
          ) : (
            <div>
              <h2 className="shopping_cart">Items</h2>
              <ProductCart
                  // id={item.id}
                  // title={item.title}
                  // image={item.image}
                  // price={item.price}
                  // rating={item.rating}
                />
              {/* {cart.map((item) => (
                
              ))} */}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )}
      </div>
    );
}
export default Checkout;