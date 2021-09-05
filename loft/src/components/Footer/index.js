import React from "react";
import "./styles.scss";
import FooterLogo from "../../assets/footer.png";
import instagram from "../../assets/inst.png";
import envelope from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="navigation">
        <h3>Naviqasiya</h3>
        <ul>
          <li>
            <Link to="/">Mətbəx mebeli</Link >
          </li>
          <li>
            <Link to="/">Koridor mebeli</Link >
          </li>
          <li>
            <Link  to="/">Şkaflar</Link >
          </li>
          <li>
            <Link  to="/">Yataq dəsti</Link >
          </li>
          <li>
            <Link to="/">Ofis mebeli</Link >
          </li>
          <li>
            <Link to="/">Matraslar</Link >
          </li>
          <li>
            <Link to="/">Otaq mebeli</Link >
          </li>
          <li>
            <Link to="/" >Uşaq mebeli</Link >
          </li>
          <li>
            <Link to="/">Yumşaq mebel</Link >
          </li>
        </ul>
        <div className="akt-and-new">
          <Link to="/">Aksiya</Link >
          <Link to="/">Yeni</Link >
        </div>
      </div>
      <div className="contact-section">
        <div className="footer-logo">
          <img src={FooterLogo} alt={FooterLogo} />
        </div>
        <p className="address">г. Анапа, Анапское шоссе, 30 Ж/К Черное море</p>
        <ul>
          <li>
            <img src={phone} alt={phone} />
            <span>+994556505995</span>
          </li>
          <li>
            <img src={instagram} alt={instagram} />
            <span>INSTAGRAM</span>
          </li>
          <li>
            <img src={envelope} alt={envelope} />
            <span>loftmebel@gmail.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
