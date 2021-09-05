import React from "react";
import "./styles.scss";

function index() {
  return (
    <>
      <div className="mapMain">
        <p>Şirkətin ünvanı</p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.2403778283233!2d37.35201291508699!3d44.89810557905866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ee0b69f1263823%3A0x5eec2adefbc3acd5!2sAnapskoye%20Shosse%2C%2030%2C%20Anapa%2C%20Krasnodarskiy%20kray%2C%20Russia%2C%20353445!5e0!3m2!1sen!2s!4v1630755649573!5m2!1sen!2s"
            width="1080"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default index;
