import React, { useState } from "react";
import "./Home.scss";
import phoneImage from "../assets/images/phoneImg.png";
import Menu from "../components/Menu";
import Card1 from "../assets/images/Card1.png";
import Card2 from "../assets/images/Card2.png";
import Card3 from "../assets/images/Card3.png";
import SignUpModal from "../components/SignUpModal";
import thirdTitle from "../assets/images/third-title.png";
import st from "../assets/images/second-section-title.png";
import thirdLeft from "../assets/images/third-img-left.png";
import fourthImg from "../assets/images/fourth-img.png";
import fourthTitle from "../assets/images/fourth-title.png";
import fourthContent1 from "../assets/images/4th-content1.png";
import fourthContent2 from "../assets/images/4th-content2.png";
import fourthIcon from "../assets/images/fourth-icon.png";
import fifthTitlte from "../assets/images/5th-title.png";
import fifthIMG1 from "../assets/images/img10.png";
import sixthTitle from "../assets/images/6th-title.png";
import sixthImg1 from "../assets/images/6th-img1.png";
import sixthImg2 from "../assets/images/6th-img2.png";
import sixthIcon from "../assets/images/6th-icon.png";
import seventh from "../assets/images/7th.png";
import divider from "../assets/images/Divider.png";
import Footer from "../components/Footer";
import logo from "../assets/images/Header.png";
import hand from "../assets/images/Hand.png";
import { useNavigate } from "react-router-dom";
import third1 from "../assets/images/icon1.png";
import third2 from "../assets/images/icon2.png";
import third3 from "../assets/images/icon3.png";
import t1 from "../assets/images/t1.png";


const Home = () => {


  const handleLogoClick = () => {
    navigate("/");
  };
  const handleClick = (url) => () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="hm ">
        <div className="header1">
          <div className="logo">
            <img
              src={logo}
              alt=""
              className="img-fluid "
              onClick={handleLogoClick}
            />
          </div>
          <div className="row">
            <div className="menu col-lg-2">
              <Menu />
            </div>
            <div className="col-lg-10">
              <img src={t1} className="img-fluid t1" alt="" />
            </div>
          </div>
        </div>

        <div className="row mt-5 pointer">
          <div className="col-lg-2 ps-5 " onClick={handleClick('https://forms.gle/4FLwCm9ufUbe5BpF7')}> 
            <div className="ctn-hand">
              <svg viewBox="0 0 100 100" className="rotating-text">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text>
                  <textPath xlinkHref="#circlePath">
                    SIGN UP FOR WAITLIST • SIGN UP FOR WAITLIST •
                  </textPath>
                </text>
              </svg>
              <img src={hand} alt="Hand" className="hand-shake" />
            </div>
          </div>
          <div className="col-lg-4 text-white">
            <h1>Struggling to communicate and connect with others?</h1>
            <p>Make it simple for everyone</p>
            <h1>MAI creates a perfect twin world</h1>
            <p>
              where it's easy to speak up, easy to connect, and easy to have
              each other in life.
            </p>
          </div>
          <div className="col-lg-6 ctn-img">
            <img src={phoneImage} alt="Phone" className="img-fluid img" />
          </div>
        </div>

        <div className="row second-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-lg-7 second-title">
                <img src={st} alt="" />
              </div>
            </div>
            <div className="row cards">
              <div className="col-12 col-lg-6 card1">
                <img
                  src={Card1}
                  alt="Connect and Parallel World"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 col-lg-3 card2">
                <img src={Card2} alt="Chat" className="img-fluid" />
              </div>
              <div className="col-6 col-lg-3 card3">
                <img src={Card3} alt="Heal" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className=" row third-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-lg-6 third-title">
                <img
                  src={thirdTitle}
                  alt="The Beginning of an Emotion-Filled Life"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="row  third-content">
              <div className="col-lg-6 left">
                <img src={thirdLeft} alt="" className="img-fluid" />
              </div>

              <div className="col-lg-6 info-cards">
                <div className="info-card d-flex flex-column align-items-start">
                  <img
                    src={third1}
                    alt="Join our parallel world"
                    className="img-fluid icon"
                  />
                  <div className="card-text">
                    Join our parrel world, create your AI twin and let others
                    connect with your AI Twin.
                  </div>
                </div>
                <div className="info-card d-flex flex-column align-items-start">
                  <img
                    src={third2}
                    alt="Talk about it through someone's AI twin"
                    className="img-fluid icon"
                  />
                  <div className="card-text">
                    Talk about it through someone's AI twin who understands you.
                  </div>
                </div>
                <div className="info-card d-flex flex-column align-items-start">
                  <img
                    src={third3}
                    alt="Empathetic Connections"
                    className="img-fluid icon"
                  />
                  <div className="card-text">
                    Empathetic Connections: Feel like no one understands you?
                    Your AI twin helps you connect with empathetic listeners.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="fourth-title">
                  <img
                    src={fourthTitle}
                    alt="Fourth Title"
                    className="img-fluid"
                  />
                  <div className="title-text">Create Your Personal AI Twin</div>
                </div>
                <div className="row fourth-1">
                  <div className="col-lg-6 fourth-img">
                    <img
                      src={fourthContent1}
                      alt="Content 1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6 fourth-img">
                    <img
                      src={fourthContent2}
                      alt="Content 2"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="row fourth-footer">
                  <div className="col-lg-1 ">
                    <img src={fourthIcon} alt="Icon" className="img-fluid" />
                  </div>
                  <div className="col-lg-11  footer-text">
                    MAI analyzes your communication patterns and preferences,
                    ensuring your AI twin reflects your true self. As a result,
                    your AI twin can effectively communicate and connect with
                    other users, creating a dynamic and interactive digital
                    presence.
                  </div>
                </div>
              </div>
              <div className="col-lg-6 fourth-right">
                <img src={fourthImg} alt="Fourth Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="fifth-section">
          <div className="container text-center">
            <div className="title mb-5">
              <img src={fifthTitlte} alt="" className="img-fluid" />
            </div>
            <p className="col-7 d-flex justify-content-center">
              Unlock your personal AI twin as it evolves over time. This
              progressive journey will gradually shape and refine your AI twin.
            </p>
            <div className="phone-images d-flex justify-content-center mt-5 gap-4">
              <img src={fifthIMG1} alt="Phone 1" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="sixth-section">
          <div className="container ">
            <img className="title img-fluid col-lg-8" src={sixthTitle} alt="" />
            <div className="row content">
              <div className="col-lg-5 col-md-5 side">
                <img
                  src={sixthImg1}
                  alt="img"
                  className="phone-image img-fluid"
                />
                <p>
                  After unlocking your AI twin, make it public to let others
                  chat with it. You can also chat with other's AI twins as you
                  wish
                </p>
              </div>
              <div className="col-lg-2 col-md-2 divider">
                <div className="divider-line"></div>
                <div className="divider-line-horizontal top"></div>
                <img
                  src={sixthIcon}
                  alt="Heart icon"
                  className="heart-icon img-fluid"
                />
                <div className="divider-line-horizontal bottom"></div>
              </div>
              <div className="col-lg-5 col-md-5 side">
                <img
                  src={sixthImg2}
                  alt="Phone interface"
                  className="phone-image img-fluid"
                />
                <p>
                  Our unique system evaluates compatibility between you and an
                  AI twin, go further by breaking barriers and meeting the real
                  person behind the AI twin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="seventh-section">
          <img
            src={seventh}
            alt="Privacy illustration"
            className="privacy-image img-fluid"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
