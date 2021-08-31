import React from "react";
import "./styles.scss";
import PhoneIcon from "../../assets/phone.png";
function Header() {
  return (
    <div className="header">
      <ul className="nav">
        <li>
          <a>Əsas Səhifə</a>
        </li>
        <li>
          <a>Haqqımızda</a>
        </li>
        <li>
          <a>Əlaqə</a>
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
