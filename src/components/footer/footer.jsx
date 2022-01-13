import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="item1">
          <div className="logo-and-icons-container">
            <div className="logo">
              <p>
                <b>HOME</b>
                SKETCH
              </p>
            </div>
            <p className="footer-Paragraph">
              Lorem Ipsum is simply dummy text of the
              <br /> printing and typesetting industry.
              <br />
              Lorem Ipsum has been the industry's
              <br />
              standard dummy text ever since the 1500s.
            </p>
            <div className="footerIcons">
              <a href="https://linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item2">
          <div className="footer-contactUs">
            <div className="footer-contact-info">
              <h1 className="contatUsTitle">Contact US</h1>
              <p className="contatUsPara">
                <i className="fas fa-map-marker-alt"></i> Amman/Jordan
              </p>
              <p className="contatUsPara">
                <i className="fas fa-phone-alt"></i> +962712066002
              </p>
              <p className="contatUsPara">
                <i className="fas fa-envelope"></i> homesketch@gmail.com
              </p>
            </div>
          </div>

          {/* <p className="copyright">Copyright ©2021 All rights reserved</p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
