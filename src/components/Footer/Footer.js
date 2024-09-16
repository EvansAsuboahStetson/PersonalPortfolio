import "./Footer.css";
import {
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaFilePdf,
} from "react-icons/fa";

import React from "react";
import { NavLink } from "react-router-dom";
import EvansAsuboahGrad_ from "../../assets/EvansAsuboahGrad_.pdf"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>421 N Woodland Blvd</p>
              <p>Deland , Florida</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              860 2567177
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              evansasuboahcapp@gmail.com
            </h4>
          </div>
          <div className="resume">
           
            <a
              href= {EvansAsuboahGrad_}
              download="Evans_Asuboah_Resume.pdf"
              className="download-link"
            >
              <FaFilePdf
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Click here to download my resume
            </a>
          </div>
        </div>
        <div className="footer__container__right">
          <h4> About Me</h4>
          <p>
            Evans is a new grad from Stetson University, FL who majored in
            computer science. He sees himself as someone who is eager to learn,
            take risks, make mistakes and live life to the fullest. Evans
            considers himself as a boy with an African heart and hopes to
            contribute his quota to the development of Africa.
          </p>
          <div className="social">
            <NavLink to="https://www.linkedin.com/in/evansasuboah1">
              <FaLinkedinIn
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>

            <NavLink to="https://github.com/EvansAsuboahStetson?tab=repositories">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
