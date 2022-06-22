import React from "react";

import * as FaIcons from "react-icons/fa";
import { CardTravel } from "@mui/icons-material";
import { useStateValue } from '../StateProvider'


function Subtotal() {
  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);
  const [{cart}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <div>Subtotal({ cart.length} items): <FaIcons.FaRupeeSign />{getCartTotal(cart)}</div>
      {/* <CurrencyFormat
        renterText={(value) => (
          <p>
            Subtotal({cart.length} items) :
            <strong>{`${value }`}</strong>
          </p>
        )}
        decimalScale={2}
        value={}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      /> */}
      <button className="checkout_button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
