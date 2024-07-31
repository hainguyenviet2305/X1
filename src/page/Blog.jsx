import React from "react";
import "./Blog.scss";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img11.jpg";
import img3 from "../assets/images/img12.jpg";
import img4 from "../assets/images/img13.jpg";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import logo from "../assets/images/Header.png";
import img5 from "../assets/images/BLOG.png";
import Menu from "../components/Menu";
import group2 from "../assets/images/Group 2.png";
import img8 from "../assets/images/img8.png";
import { useNavigate } from "react-router-dom";
import divider from "../assets/images/Divider.png";
import hand from "../assets/images/Hand.png";
import t2 from "../assets/images/t2.png";

const Blog = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleClick = (path) => () => {
    navigate(path);
  };

  const handleClickHand = (url) => () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="blog min-vh-100">
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
            <div className="col-lg-9 blog-i">
              <img src={t2} className="img-fluid t2" alt="" />
            </div>
          </div>
          <div className="row aa">
            <div
              className="col-lg-2 col-4 pointer"
              onClick={handleClickHand("https://forms.gle/4FLwCm9ufUbe5BpF7")}
            >
              <div className="ctn-hand ">
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
            <div className="col-lg-4 col-7 text-white">
              <div className="txt">
                Learn the stories behind our team and how AI revolutionalize the
                mental health space. Join other professionals to find new ways
                of treating mental health
              </div>
            </div>
            <div className="col-lg-6 col-12 ps-3 bli">
              <img src={img8} alt="Phone" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="row blog2-section">
          <div className="col-lg-6">
            <div>
              <img src={img1} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 blog2-content">
            <div>
              <div
                className="blog2-content-title"
                onClick={handleClick("/detail1")}
              >
                GROWING UP YOUR AI TWIN
              </div>
              <div className="blog2-content-content">
                In the rapidly evolving landscape of technology, spatial
                computing is emerging as a game-changer, promising to redefine
                our interaction with the digital and physical realms.
              </div>
              <div className="date-button">
                <div className="date">23.12.2024</div>
                <CustomButton onClick={handleClick("/detail1")} />
              </div>
            </div>
          </div>
        </div>
        <div className="row blog3-section">
          <div className="col-lg-6 blog3-content">
            <div>
              <div
                className="blog3-content-title"
                onClick={handleClick("/detail2")}
              >
                REVOLUTIONIZING SOCIAL CONNECTIONS: MAI’S LIVE NOW IN EARLY ACCESS!

              </div>
              <div className="blog3-content-content">
                Experience a new era of social connections with MAI's early
                access launch! Designed to support individuals with social
                anxiety, MAI fosters genuine interactions through personalized
                digital replicas. Dive into a safe and encouraging environment,
                backed by advanced algorithms and extensive research. Join us in
                revolutionizing online interactions and building connections
                that truly matter.
              </div>
              <div className="date-button">
                <div className="date">02/08/2024</div>
                <CustomButton onClick={handleClick("/detail2")} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img src={img2} alt="" className="img-fluid bl-img" />
            </div>
          </div>
        </div>
        <div className="row blog4-section">
          <div className="col-lg-6">
            <div>
              <img src={img3} alt="" className="img-fluid bl-img" />
            </div>
          </div>
          <div className="col-lg-6 blog4-content">
            <div>
              <div
                className="blog4-content-title"
                onClick={handleClick("/detail4")}
              >
                BLOG THE IMPORTANCE OF COMMUNICATION
              </div>
              <div className="blog4-content-content">
                Explore the significance of effective communication in enhancing
                personal and professional relationships. Learn about common
                communication challenges, their impact, and practical strategies
                to overcome them. Discover how improving your communication
                skills can lead to better conflict resolution, personal growth,
                and mental well-being. If you face communication barriers, find
                out how our app MAI can help you express yourself more
                effectively.
              </div>
              <div className="date-button">
                <div className="date">01/08/2024</div>
                <CustomButton onClick={handleClick("/detail4")} />
              </div>
            </div>
          </div>
        </div>
        <div className="row blog5-section">
          <div className="col-lg-6 blog5-content">
            <div>
              <div
                className="blog5-content-title"
                onClick={handleClick("/detail3")}
              >
                BEAT YOUR ANXIETY
              </div>
              <div className="blog5-content-content">
                Struggling with social anxiety? Discover how to confidently
                connect with others with these practical tips. Learn to initiate
                conversations, ask genuine questions, and practice active
                listening. Embrace honesty and balance in sharing about yourself
                while taking your time to build meaningful relationships.
              </div>
              <div className="date-button">
                <div className="date">05/08/2024</div>
                <CustomButton onClick={handleClick("/detail3")} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col">
            <div>
              <img src={img4} alt="" className="img-fluid bl-img" />
            </div>
          </div>
          <div className="btn-showmore-container">
            <button className="btn-showmore">Show more</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
