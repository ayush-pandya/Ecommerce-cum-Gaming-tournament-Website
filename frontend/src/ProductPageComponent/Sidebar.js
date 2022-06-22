import React, { useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="nav-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                <img src={item.image} className="item-image" alt="" />
                <div className="item-info">
                  <span className="product-title">{item.title}</span>
                  <span className="product-price">
                    <FaIcons.FaRupeeSign />
                    {item.price}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar
