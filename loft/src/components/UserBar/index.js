import React from "react";
import "./styles.scss";
import Bag from "../../assets/bag.png";
import ProfilIcon from "../../assets/profile-icon.png";
function UserBar() {
  return (
    <div className="user-bar">
      <a>
        <img src={Bag} alt={Bag} />
      </a>
      <a>
        <img src={ProfilIcon} alt={ProfilIcon} />
      </a>
    </div>
  );
}

export default UserBar;
