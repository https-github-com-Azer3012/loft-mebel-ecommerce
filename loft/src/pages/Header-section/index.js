import React from "react";
import Logo from "../../components/Logo";
import Search from "../../components/Search";
import UserBar from "../../components/UserBar";
import "./styles.scss";

function HeaderSection() {
  return (
    <div className="header-section">
      <Logo />
      <Search />
      <UserBar />
    </div>
  );
}

export default HeaderSection;
