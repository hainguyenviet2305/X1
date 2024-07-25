import React from 'react';
import logo from "../assets/images/Header.png";
import Menu from "../components/Menu";
import img9 from "../assets/images/img9.png";
import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import a4 from "../assets/images/a4.png";
import a5 from "../assets/images/a5.png";
import a6 from "../assets/images/a6.png";
import a7 from "../assets/images/a7.png";
import a8 from "../assets/images/a8.png";
import './About.scss';

const About = () => {
  return (
    <div className="About min-vh-100">
      <div className="logo">
        <img src={logo} alt="" className="img-fluid" />
      </div>
      <div className="row">
        <div className="menu col-lg-2">
          <Menu />
        </div>
        <div className="col-lg-4 about-i">
          <img src={img9} alt="" className="img-fluid" />
          <div className="about-text col-10">
            To satisfy the passion of making mobile apps, test first and
            create products for millions of users
          </div>
        </div>
        <div className="row">
          <div className="">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex ">
                    <img src={a1} className="d-block w-20" alt="..." />
                    <img src={a2} className="d-block w-20" alt="..." />
                    <img src={a3} className="d-block w-20" alt="..." />
                    <img src={a4} className="d-block w-20" alt="..." />
                    <img src={a5} className="d-block w-20" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex ">
                    <img src={a6} className="d-block w-20" alt="..." />
                    <img src={a7} className="d-block w-20" alt="..." />
                    <img src={a8} className="d-block w-20" alt="..." />
                    <img src={a1} className="d-block w-20" alt="..." />
                    <img src={a2} className="d-block w-20" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
