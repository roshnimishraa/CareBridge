import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At CareBridge, we connect patients with trusted doctors for seamless and efficient appointments. Our platform is designed to make healthcare more accessible, providing you with the convenience and support you need for a healthier future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
