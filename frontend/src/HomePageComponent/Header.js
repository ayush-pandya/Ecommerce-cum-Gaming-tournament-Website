import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();
  const logoutUseer = () => {
    // if (user) {
    //   auth.signOut();
    // }
  }
  return (
    <div className="header">
      <div className="header_title">
        <span>SPARTAN</span>
      </div>
      <img className="header_logo" src="img/logo.png" />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        {/* Logo */}
      </div>

      <div className="header_nav">
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">SIGN UP</span>
            {/* <span className="header_optionLineTwo">Sign In</span> */}
          </div>
        </Link>
        <Link to={ /*!user && */ "/Login"} className="header_link">
          <div /*onClick={ logoutUser}*/ className="header_option">
            <span className="header_optionLineOne">{/*user ? 'LOG OUT' :*/'SIGN IN'}</span>
            {/* <span className="header_optionLineTwo"></span> */}
          </div>
        </Link>
        {/* <Link to={ user && "/login"} className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">ORDERS</span>
          </div>
        </Link> */}
      </div>
      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="header_optionLineTwo header_productCount">{cart?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
