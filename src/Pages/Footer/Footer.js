import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Branches</h3>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Mumbai{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Delhi{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Goregaon{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Patiala{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Chandigarh{" "}
            </a>
          </div>

          <div className="box">
            <h3>Quick links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Home{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> About{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Our doctors{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Gallery{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Price{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Review{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Contact{" "}
            </a>
          </div>

          <div className="box">
            <h3>Contact information</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +123-456-7890{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +111-222-3333{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i> shaikhanas@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i> anasshaikh@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104{" "}
            </a>
          </div>

          <div className="box">
            <h3>Follow us</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"></i> Facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter"></i> Twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"></i> Instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin"></i> Linkedin{" "}
            </a>
          </div>
        </div>

        <div className="credit">
          {" "}
          Copyright @2023, MedCare. All rights reserved.{" "}
        </div>
      </section>
    </>
  );
};

export default Footer;
