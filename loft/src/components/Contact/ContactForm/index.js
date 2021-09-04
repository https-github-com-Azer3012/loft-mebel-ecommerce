import React from "react";
import "./styles.scss";
import phone from "../../../assets/phone.svg";
import mail from "../../../assets/mail.svg";
import inst from "../../../assets/inst.svg";

function index() {
  return (
    <>
      <section className="contactMain">
        <div className="contactMainTitle">
          <p>Bizimlə əlaqə</p>
        </div>

        <div className="contactFlex">
          <form className="contactForm">
            <div className="nameAndEmailSections">
              <div className="inputName">
                <label htmlFor="name">Adınız</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="inputName">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
            </div>

            <div className="textarea">
              <label htmlFor="message">Mesaj daxil edin</label>
              <textarea
                id="message"
                name="message"
                maxLength="512"
                required
                rows="7"
                cols="58"
              />
            </div>

            <div className="formButtons">
              <button className="buttonAttach">Fayl əlavə et</button>
              <button className="buttonSend">Göndər</button>
            </div>
          </form>
          <section className="rightSection">
            <div>
              <img src={phone} alt="phone" />
              <p>+994556505995</p>
            </div>
            <div>
              <img src={mail} alt="mail" />
              <p>loftmebel@gmail.com</p>
            </div>
            <div>
              <img src={inst} alt="inst" />
              <p>INSTAGRAM</p>
            </div>
            <address>г. Анапа, Анапское шоссе, 30 Ж/К Черное море</address>
          </section>
        </div>
      </section>
    </>
  );
}

export default index;
