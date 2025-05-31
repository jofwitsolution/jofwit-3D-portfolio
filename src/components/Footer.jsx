import React from "react";
import { styles } from "../styles";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} py-6 sm:py-8`}>
      <div className="text-[15px] text-white w-full flex flex-col sm:flex-row gap-y-6 justify-between items-center max-w-7xl mx-auto">
        <div className="order-3 sm:order-1">© Bitnox Solution</div>
        <div className="order-1">
          <a href="#hero" className="text-secondary font-bold">
            Top
          </a>
        </div>
        <div className="flex gap-4 order-2 sm:order-1">
          <div>
            <a
              href="https://twitter.com/faleye_oj"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </div>
          <div>
            <a
              href="https://facebook.com/jofwitsolution"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/joseph-oluwafemi-faleye/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
