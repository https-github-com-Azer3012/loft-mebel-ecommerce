import React from "react";
import "./styles.scss";
import companyMap from "../../../assets/yandex-map.svg";

function index() {
  return (
    <>
      <div className="mapMain">
        <p>Şirkətin ünvanı</p>
        <img src={companyMap} alt="map" />
      </div>
    </>
  );
}

export default index;
