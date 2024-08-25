import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
       
        <div className="footer-bottom">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/roshnimishraa"
            target="_blank"
            rel="noreferrer"
          >
            Roshni
          </a>{" "}
          © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
