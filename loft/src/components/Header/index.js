import React from "react";
import "./styles.scss";
import PhoneIcon from "../../assets/phone.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <ul className="nav">
        <li>
          <Link to='/'>Əsas Səhifə</Link>
        </li>
        <li>
          <Link to='/'>Haqqımızda</Link>
        </li>
        <li>
          <Link to='/'>Əlaqə</Link>
        </li>
      </ul>
      <div className="number">
        <img src={PhoneIcon} alt={PhoneIcon} />
        <p>+994556505995</p>
      </div>
    </div>
  );
}

export default Header;
