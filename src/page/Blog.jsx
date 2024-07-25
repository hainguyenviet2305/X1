import React from "react";
import "./Blog.scss";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import logo from "../assets/images/Header.png";
import img5 from "../assets/images/BLOG.png";
import Menu from "../components/Menu";
import group2 from "../assets/images/Group 2.png";
import img8 from "../assets/images/img8.png";

const Blog = () => {
  return (
    <>
      <div className="blog min-vh-100">
        <div className="header1 blog-1">
          <div className="logo">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <div className="row">
            <div className="menu col-lg-4">
              <Menu />
            </div>
            <div className="col-lg-8 col-6">
              <img src={img5} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="row aa">
            <div className="col-lg-2 ps-5">
              <img
                src={group2}
                alt="group2"
                className="img-fluid"
                // onClick={openModal}
              />
            </div>
            <div className="col-lg-4 col-6 text-white">
              <div>
                Learn the stories behind our team and how AI revolutionalize the
                mental health space. Join other professionals to find new ways
                of treating mental health
              </div>
            </div>
            <div className="col-lg-6 col-12">
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
              <div className="blog2-content-title">GROWING UP YOUR AI TWIN</div>
              <div className="blog2-content-content">
                In the rapidly evolving landscape of technology, spatial
                computing is emerging as a game-changer, promising to redefine
                our interaction with the digital and physical realms.
              </div>
              <div className="date-button">
                <div className="date">23.12.2024</div>
                <CustomButton />
              </div>
            </div>
          </div>
        </div>
        <div className="row blog3-section">
          <div className="col-lg-6 blog3-content">
            <div>
              <div className="blog3-content-title">GROWING UP YOUR AI TWIN</div>
              <div className="blog3-content-content">
                In the rapidly evolving landscape of technology, spatial
                computing is emerging as a game-changer, promising to redefine
                our interaction with the digital and physical realms.
              </div>
              <div className="date-button">
                <div className="date">23.12.2024</div>
                <CustomButton />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img src={img2} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row blog4-section">
          <div className="col-lg-6">
            <div>
              <img src={img3} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 blog4-content">
            <div>
              <div className="blog4-content-title">GROWING UP YOUR AI TWIN</div>
              <div className="blog4-content-content">
                In the rapidly evolving landscape of technology, spatial
                computing is emerging as a game-changer, promising to redefine
                our interaction with the digital and physical realms.
              </div>
              <div className="date-button">
                <div className="date">23.12.2024</div>
                <CustomButton />
              </div>
            </div>
          </div>
        </div>
        <div className="row blog5-section">
          <div className="col-lg-6 blog5-content">
            <div>
              <div className="blog5-content-title">GROWING UP YOUR AI TWIN</div>
              <div className="blog5-content-content">
                In the rapidly evolving landscape of technology, spatial
                computing is emerging as a game-changer, promising to redefine
                our interaction with the digital and physical realms.
              </div>
              <div className="date-button">
                <div className="date">23.12.2024</div>
                <CustomButton />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img src={img4} alt="" className="img-fluid" />
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
