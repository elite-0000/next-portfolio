import React from "react";

import FooterStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <hr />
      <div className={FooterStyles.container}>
        <div className="firsttext">
          <h2>Call</h2>
          <p>+1 (412) 670-4119</p>
        </div>
        <div className="secondtext">
          <h2>Email</h2>
          <p>oleksandrmalskyi@gmail.com</p>
        </div>
      </div>
      <div className={FooterStyles.secondcontainer}>
        <p>Innovating one project at a time</p>
        <ul>
          <li>
            <a href="https://github.com/Winterhub-1990" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/oleksandrmalsky" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/oleksandrmalsky" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
