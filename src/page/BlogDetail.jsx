import React, { useEffect, useState } from "react";
import "./BlogDetail.scss";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img2 from "../assets/images/img2.png";
import Menu from "../components/Menu";
import logo from "../assets/images/Header.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const [currentItem, setCurrentItem] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const items = [
    {
      img: img6,
      text: "AFTER ALL, WITH AI, THERE’S TRULY NO RUSH. NO EXPECTATIONS. NO PRESSURE.",
    },
    {
      img: img2,
      text: "AFTER ALL, WITH AI, THERE’S TRULY NO RUSH. NO EXPECTATIONS. NO PRESSURE.",
    },
  ];

  const prevItem = () => {
    setCurrentItem((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextItem = () => {
    setCurrentItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="detail-container">
        <div className="p1">
          <div className="header1">
            <div className="logo">
              <img
                src={logo}
                alt=""
                className="img-fluid"
                onClick={handleLogoClick}
              />
            </div>
            <div className="menu">
              <Menu />
            </div>
          </div>
          <div className="p1-title">
            Reflections: “A Letter to My Past Self ” by Phil De Vera
          </div>

          <div className="text-container">
            <div className="custom-text">a letter to my past self</div>
            <div className="custom-text">introspection</div>
            <div className="custom-text">reflection</div>
            <div className="custom-text">new year</div>
          </div>

          <div className="date-container">
            <div className="line"></div>
            <div className="date-text">23.12.2024</div>
            <div className="line"></div>
          </div>
        </div>

        <div className="col-lg-8 sc">
          <div className="detail-titles">
            <div className="title-icon">
              <img src={img5} alt="" className="img-fluid" />
            </div>
            <div className="detail-title">
              <div>
                In the intricate labyrinth of our minds, we often confront the
                shadows of our pasts, seeking solace and understanding. As we
                step into the new year in 2024, we delve into a heartfelt letter
                penned by our own internal AI-twin, reflecting on the journey of
                personal milestones and self-discovery.
              </div>
            </div>
          </div>
          <div className="detail-img">
            <img src={img6} alt="" className="img-fluid AI" />
            <div className="description">
              An AI-generated image of Phil done by our very our team :)
            </div>
          </div>

          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              His heartfelt story serves as proof of how intricate human
              emotions can be and the strength that introspection holds — an
              example of a journey where Murror aims to be your guiding light.
            </div>

            <div className="detail-paragraph">
              To begin our Reflections series, I asked our Murror AI app for a
              prompt that could help Phil begin his reflection. As he felt
              (understandably) nervous doing an interview in person and
              answering personal questions on the spot, this AI-generated prompt
              offered a chill way to just sit back… think, feel, and reflect.
            </div>
          </div>
          <div className="detail-title2">
            After all, with AI, there’s truly no rush. No expectations. No
            pressure.
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              The dawn of a new year has always symbolized a fresh start — a
              chance to reflect, grow, and embrace positive change while showing
              gratitude for our past.
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Here at Murror, we understand, too, that sometimes the feelings
              towards past lives and lessons can overtake us, so it is important
              to create a safe space and offer support to comfortably explore
              those emotions
            </div>
          </div>

          <div className="detail-img">
            <img src={img2} alt="" className="img-fluid AI" />
            <div className="description">
              An AI-generated image of Phil done by our very our team :)
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              His heartfelt story serves as proof of how intricate human
              emotions can be and the strength that introspection holds — an
              example of a journey where Murror aims to be your guiding light.
            </div>

            <div className="detail-paragraph">
              To begin our Reflections series, I asked our Murror AI app for a
              prompt that could help Phil begin his reflection. As he felt
              (understandably) nervous doing an interview in person and
              answering personal questions on the spot, this AI-generated prompt
              offered a chill way to just sit back… think, feel, and reflect.
            </div>
          </div>

          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              His heartfelt story serves as proof of how intricate human
              emotions can be and the strength that introspection holds — an
              example of a journey where Murror aims to be your guiding light.
            </div>

            <div className="detail-paragraph">
              To begin our Reflections series, I asked our Murror AI app for a
              prompt that could help Phil begin his reflection. As he felt
              (understandably) nervous doing an interview in person and
              answering personal questions on the spot, this AI-generated prompt
              offered a chill way to just sit back… think, feel, and reflect.
            </div>
          </div>

          <div className="detail-title2">With so much love,</div>

          <div className="detail-title2">Your Current Your Self &lt;3</div>
        </div>
        <div className="row dt-ft">
      <div className="col-lg-1 col-2 d-flex align-items-center justify-content-center">
        <button className="arrow left-arrow" onClick={prevItem}>
          &lt;
        </button>
      </div>
      {items.map((item, index) => (
        <div
          className={`col-lg-5 col-8 ft ${
            index === currentItem ||
            (isLargeScreen && index === (currentItem + 1) % items.length)
              ? "active"
              : "hidden"
          }`}
          key={index}
        >
          <img src={item.img} alt="" className="img-fluid AI" />
          <div className="ft-text">{item.text}</div>
        </div>
      ))}
      <div className="col-lg-1 col-2 d-flex align-items-center justify-content-center">
        <button className="arrow right-arrow" onClick={nextItem}>
          &gt;
        </button>
      </div>
    </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
