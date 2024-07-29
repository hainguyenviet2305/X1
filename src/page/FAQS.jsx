import React, { useState } from "react";
import "./FAQS.scss";
import Header from "../components/Header";
import Menu from "../components/Menu";
import logo from "../assets/images/Header.png";
import img1 from "../assets/images/FAQS.png";
import img7 from "../assets/images/img7.png";
import star from "../assets/images/star.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import divider from "../assets/images/Divider.png";

const FAQS = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className=" FAQS min-vh-100">
        <div className="header1">
          <div className="logo">
            <img src={logo} alt="" className="img-fluid" onClick={handleLogoClick}/>
          </div>
          <div className="menu">
            <Menu />
          </div>
        </div>

        <div className="row Fcontent">
          <div className="col-lg-5 ">
            <div className="col-lg-9 blog-i">
                <div className="headline">
                  FAQS
                  <img className="divider-img" alt="Divider" src={divider} />
                </div>
                </div>
            <img className="img2 d-none d-lg-block" src={img7} alt="" />
          </div>
          <div className="col-lg-7">
            <div className="faq-cc">
              <div
                className={`faq-item ${activeIndex === 0 ? "active" : ""}`}
                onClick={() => toggleFAQ(0)}
              >
                <div className="faq-text">
                <img className="star-icon img-fluid" src={star} alt="" />
                  Can an artificial intelligence chatbot
                </div>
                <button className="faq-button">
                  {activeIndex === 0 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 0 && (
                <div className="faq-answer">
                  <div className="answer">
                    Stigma: There is still a significant amount of stigma around
                    mental health issues, and many people may feel ashamed or
                    embarrassed to seek help from a therapist. This stigma can
                    be especially pronounced in certain cultures or communities
                    where mental health issues are viewed as a weakness or a
                    personal failing.
                  </div>
                  <div className="answer">
                    Stigma: There is still a significant amount of stigma around
                    mental health issues, and many people may feel ashamed or
                    embarrassed to seek help from a therapist. This stigma can
                    be especially pronounced in certain cultures or communities
                    where mental health issues are viewed as a weakness or a
                    personal failing.
                  </div>
                  <div className="answer">
                    Stigma: There is still a significant amount of stigma around
                    mental health issues, and many people may feel ashamed or
                    embarrassed to seek help from a therapist. This stigma can
                    be especially pronounced in certain cultures or communities
                    where mental health issues are viewed as a weakness or a
                    personal failing.
                  </div>
                  <div className="faq-divider"></div>
                </div>
              )}

              <div
                className={`faq-item ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => toggleFAQ(1)}
              >
                <div className="faq-text">
                <img className="star-icon img-fluid" src={star} alt="" />
                  Can an artificial intelligence chatbot assistant, provide
                  responses to patient questions that are of comparable quality
                  and empathy to those written by physicians?
                </div>
                <button className="faq-button">
                  {activeIndex === 1 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 1 && (
                <div className="faq-answer">
                  <div className="answer">
                    Stigma: There is still a significant amount of stigma around
                    mental health issues, and many people may feel ashamed or
                    embarrassed to seek help from a therapist. This stigma can
                    be especially pronounced in certain cultures or communities
                    where mental health issues are viewed as a weakness or a
                    personal failing.
                  </div>
                  <div className="faq-divider"></div>
                </div>
              )}

              <div
                className={`faq-item ${activeIndex === 2 ? "active" : ""}`}
                onClick={() => toggleFAQ(2)}
              >
                <div className="faq-text">
                <img className="star-icon img-fluid" src={star} alt="" />
                  More than 50% of people with mental disorders refuse to speak
                  with a professional
                </div>
                <button className="faq-button">
                  {activeIndex === 2 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 2 && (
                <div className="faq-answer">
                  <div className="answer">
                    Stigma: There is still a significant amount of stigma around
                    mental health issues, and many people may feel ashamed or
                    embarrassed to seek help from a therapist. This stigma can
                    be especially pronounced in certain cultures or communities
                    where mental health issues are viewed as a weakness or a
                    personal failing.
                  </div>
                  <div className="faq-divider"></div>
                </div>
              )}

              <div
                className={`faq-item ${activeIndex === 3 ? "active" : ""}`}
                onClick={() => toggleFAQ(3)}
              >
                <div className="faq-text">
                <img className="star-icon img-fluid" src={star} alt="" />
                  Why AI could help bridge the gap between doctors and patients,
                  therapists and clients.
                </div>
                <button className="faq-button">
                  {activeIndex === 3 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 3 && (
                <div className="faq-answer">
                  <div className="answer">
                    Stigma: There is still a significant amount of stigma around
                    mental health issues, and many people may feel ashamed or
                    embarrassed to seek help from a therapist. This stigma can
                    be especially pronounced in certain cultures or communities
                    where mental health issues are viewed as a weakness or a
                    personal failing.
                  </div>
                  <div className="faq-divider"></div>
                </div>
              )}

              <div
                className={`faq-item ${activeIndex === 4 ? "active" : ""}`}
                onClick={() => toggleFAQ(4)}
              >
                <div className="faq-text">
                <img className="star-icon img-fluid" src={star} alt="" />
                  Privacy and security is our top priority
                </div>
                <button className="faq-button">
                  {activeIndex === 4 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 4 && (
                <div className="faq-answer">
                  <div className="answer">
                    Stigma: There is still a significant amount of stigma around
                    mental health issues, and many people may feel ashamed or
                    embarrassed to seek help from a therapist. This stigma can
                    be especially pronounced in certain cultures or communities
                    where mental health issues are viewed as a weakness or a
                    personal failing.
                  </div>
                  <div className="faq-divider"></div>
                </div>
              )}
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

export default FAQS;
