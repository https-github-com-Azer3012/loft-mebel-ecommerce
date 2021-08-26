import React from "react";
import "./styles.scss";
import FooterLogo from "../../assets/footer.png";
import instagram from "../../assets/inst.png";
import envelope from "../../assets/mail.png";
import phone from "../../assets/phone.png";

function Footer() {
  return (
    <footer>
      <div className="navigation">
        <h3>Naviqasiya</h3>
        <ul>
          <li>
            <a>Mətbəx mebeli</a>
          </li>
          <li>
            <a>Koridor mebeli</a>
          </li>
          <li>
            <a>Şkaflar</a>
          </li>
          <li>
            <a>Yataq dəsti</a>
          </li>
          <li>
            <a>Ofis mebeli</a>
          </li>
          <li>
            <a>Matraslar</a>
          </li>
          <li>
            <a>Otaq mebeli</a>
          </li>
          <li>
            <a>Uşaq mebeli</a>
          </li>
          <li>
            <a>Yumşaq mebel</a>
          </li>
        </ul>
        <div className="akt-and-new">
          <a>Aksiya</a>
          <a>Yeni</a>
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
