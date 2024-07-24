import React, { useState } from "react";
import "./Home.scss";
import phoneImage from "../assets/images/phone.png"; // Đường dẫn đến hình ảnh điện thoại của bạn
import Menu from "../components/Menu";
import titleImage from "../assets/images/intro-title.png";
import group2 from "../assets/images/Group 2.png";
import secondTitle from "../assets/images/second-section-title.png"; // Đường dẫn đến hình ảnh tiêu đề mới
import Card1 from "../assets/images/Card1.png";
import Card2 from "../assets/images/Card2.png";
import Card3 from "../assets/images/Card3.png";
import SignUpModal from "../components/SignUpModal";
import thirdTitle from "../assets/images/third-title.png"; // Đường dẫn đến hình ảnh tiêu đề mới
import third1 from "../assets/images/third-img-r1.png";
import third2 from "../assets/images/third-img-r2.png";
import third3 from "../assets/images/third-img-r3.png";
import thirdLeft from "../assets/images/third-img-left.png";
import fourthImg from "../assets/images/fourth-img.png";
import fourthTitle from "../assets/images/fourth-title.png";
import fourthContent1 from "../assets/images/4th-content1.png";
import fourthContent2 from "../assets/images/4th-content2.png";
import fourthIcon from "../assets/images/fourth-icon.png";
import fifthTitlte from "../assets/images/5th-title.png";
import fifthIMG1 from "../assets/images/5th-img.png";
import sixthTitle from "../assets/images/6th-title.png";
import sixthImg1 from "../assets/images/6th-img1.png";
import sixthImg2 from "../assets/images/6th-img2.png";
import sixthIcon from "../assets/images/6th-icon.png";
import seventh from "../assets/images/7th.png";
import divider from "../assets/images/Divider.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      {/* <section className="home">
        <Menu />
        <div className="introduction">
          <div className="intro-title">
            <img
              src={titleImage}
              alt="Breaking the Ice: From MAI to Real Life"
               className="img-fluid"
            />
          </div>
          <div className="intro-content" style={{ position: "relative" }}>
            <div
              className="intro-img"
              onClick={openModal} // Thêm sự kiện onClick để mở modal
            >
              <img src={group2} alt="group2"  className="img-fluid"/>
            </div>
            <div className="intro-text">
              <h1>Struggling to communicate and connect with others?</h1>
              <p>Make it simple for everyone</p>
              <h1>MAI creates a perfect twin world</h1>
              <p>
                where it's easy to speak up, easy to connect, and easy to have
                each other in life.
              </p>
            </div>
            <div className="intro-image">
              <img src={phoneImage} alt="Phone"  className="img-fluid"/>
            </div>
          </div>
        </div>
      </section> */}
      <section style={{ backgroundColor: "#29057a" }} className="min-vh-100">
        <Header />
        <div className="row">
          <div className="col-lg-2 ps-5">
            <Menu />
          </div>
          <div className="col-lg-10">
            <div className="d-flex flex-row">
              <div
                style={{
                  fontSize: "100px",
                  fontFamily: "Usuzi",
                  background:
                    "linear-gradient(90deg, rgba(226, 137, 254, 0) 0%, #E289FE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "2px white",
                }}
              >
                BREAKING THE ICE
                <img
                  style={{ marginTop: "18px", marginLeft: "30px" }}
                  alt="Divider"
                  src={divider}
                />
              </div>
            </div>
            <div
              style={{
                fontSize: "100px",
                fontFamily: "Usuzi",
                color: "white",
              }}
            >
              FROM MAI TO REAL LIFE
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-2 ps-5">
            <img src={group2} alt="group2" className="img-fluid" />
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
          <div className="col-lg-6">
            <img src={phoneImage} alt="Phone" className="img-fluid" />
          </div>
        </div>
      </section>
      <div className="second-section">
        <div className="second-title">
          <img
            src={secondTitle}
            alt="Articulating Your Experience is Hard"
            className="img-fluid"
          />
        </div>
        <div className="cards">
          <div className="card1">
            <img
              src={Card1}
              alt="Connect and Parallel World"
              className="img-fluid"
            />
          </div>
          <div className="card2">
            <img src={Card2} alt="Chat" className="img-fluid" />
          </div>
          <div className="card3">
            <img src={Card3} alt="Heal" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="third-section">
        <div className="third-title">
          <img
            src={thirdTitle}
            alt="The Beginning of an Emotion-Filled Life"
            className="img-fluid"
          />
        </div>
        <div className="third-content">
          <div className="left">
            <img src={thirdLeft} alt="" className="img-fluid" />
          </div>
          <div className="info-cards">
            <div className="info-card">
              <img
                src={third1}
                alt="Join our parallel world"
                className="img-fluid"
              />
            </div>
            <div className="info-card">
              <img
                src={third2}
                alt="Talk about it through someone's AI twin"
                className="img-fluid"
              />
            </div>
            <div className="info-card">
              <img
                src={third3}
                alt="Empathetic Connections"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-section">
        <div className="fourth-left">
          <div className="fourth-title">
            <img src={fourthTitle} alt="" className="img-fluid" />
            <h2>Create Your Personal AI Twin</h2>
          </div>
          <div className="fourth-content">
            <div className="card">
              <img src={fourthContent1} alt="" className="img-fluid" />
            </div>
            <div className="card">
              <img src={fourthContent2} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="fourth-footer">
            <p>
              <img src={fourthIcon} alt="" className="img-fluid" />
              <span>
                MAI analyzes your communication patterns and preferences,
                ensuring your AI twin reflects your true self. As a result, your
                AI twin can effectively communicate and connect with other
                users, creating a dynamic and interactive digital presence.
              </span>
            </p>
          </div>
        </div>
        <div className="fourth-right">
          <img src={fourthImg} alt="" className="img-fluid" />
        </div>
      </div>

      <div className="fifth-section">
        <div className="title">
          <img src={fifthTitlte} alt="" className="img-fluid" />
        </div>
        <p>
          Unlock your personal AI twin as it evolves over time. This progressive
          journey will gradually
        </p>
        <p>shape and refine your AI twin.</p>
        <div className="phone-images">
          <img src={fifthIMG1} alt="Phone 1" className="img-fluid" />
        </div>
      </div>

      <div className="sixth-section">
        <img className="title img-fluid" src={sixthTitle} alt="" />
        <div className="content">
          <div className="side left-side">
            <img src={sixthImg1} alt="img" className="phone-image img-fluid" />
            <p>
              After unlocking your AI twin, make it public to let others chat
              with it. You can also chat with other's AI twins as you wish
            </p>
          </div>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-line-horizontal top"></div>
            <img
              src={sixthIcon}
              alt="Heart icon"
              className="heart-icon  img-fluid"
            />
            <div className="divider-line-horizontal bottom"></div>
            <span className="percentage"></span>
          </div>
          <div className="side right-side">
            <img
              src={sixthImg2}
              alt="Phone interface"
              className="phone-image img-fluid"
            />
            <p>
              Our unique system evaluates compatibility between you and an AI
              twin, go further by breaking barriers and meeting the real person
              behind the AI twin.
            </p>
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
      <SignUpModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Footer />
    </>
  );
};

export default Home;
