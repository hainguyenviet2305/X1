import React from "react";
import logo from "../assets/images/Header.png";
import Menu from "../components/Menu";
import img9 from "../assets/images/img9.png";
import a1 from "../assets/images/p1.png";
import a2 from "../assets/images/p2.png";
import a3 from "../assets/images/p3.png";
import a4 from "../assets/images/p4.png";
import a5 from "../assets/images/p5.png";
import a6 from "../assets/images/p6.png";
import a7 from "../assets/images/p7.png";
import a8 from "../assets/images/p8.png";
import "./About.scss";
import t4 from "../assets/images/t4.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="About min-vh-100">
        <div className="header1">
          <div className="logo">
            <img
              src={logo}
              alt=""
              className="img-fluid"
              onClick={handleLogoClick}
            />
          </div>
          <div className="row">
            <div className="menu col-lg-2">
              <Menu />
            </div>
            <div className="col-lg-9 about-i">
              <img src={t4} className="img-fluid t4" alt="" />
              <div className="about-text col-lg-6 ">
                To satisfy the passion of making mobile apps, test first and
                create products for millions of users
              </div>
            </div>
          </div>
        </div>

        <div className="row ab">
          <div className="col-lg">
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src={a1} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a2} className="d-block " alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a3} className="d-block " alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a4} className="d-block " alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a5} className="d-block " alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a6} className="d-block " alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a7} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a8} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                {/* Repeat the slides to create a continuous loop */}
                <div className="slide">
                  <img src={a1} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a2} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a3} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a4} className="d-block " alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a5} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a6} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a7} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
                <div className="slide">
                  <img src={a8} className="d-block" alt="..." />
                  <div className="slide-text">Elena Natsvlishvili</div>
                  <div className="slide-subtext">Head of production</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-footer">
        <Footer />
      </div>
    </>
  );
};

export default About;
