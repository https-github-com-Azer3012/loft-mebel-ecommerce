import React from "react";
import "./styles.scss";
import Bag from "../../assets/bag.png";
import ProfilIcon from "../../assets/profile-icon.png";
import { Link } from "react-router-dom";
function UserBar() {
  return (
    <div className="user-bar">
      <Link to="/basket">
        <img src={Bag} alt={Bag} />
      </Link>
      <Link to='/profile'>
        <img src={ProfilIcon} alt={ProfilIcon} />
      </Link>
    </div>
  );
}

export default UserBar;
