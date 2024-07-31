import React, { useEffect, useState } from "react";
import "./BlogDetail.scss";
import img5 from "../assets/images/img5.png";
import img1 from "../assets/images/img11.jpg";
import img2 from "../assets/images/img14.png";
import img3 from "../assets/images/img17.png";
import img6 from "../assets/images/img6.png";
import img4 from "../assets/images/img12.jpg";
import img7 from "../assets/images/img15.png";
import img8 from "../assets/images/img16.png";
import Menu from "../components/Menu";
import logo from "../assets/images/Header.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import arrowR from "../assets/images/arrow-right.png";
import arrowL from "../assets/images/arrow-left.png";

const BlogDetail2 = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const [currentItem, setCurrentItem] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const handleItemClick = (path) => {
    navigate(path);
  };

  const items = [
    {
      img: img1,
      text: "Revolutionizing Social Connections: MAI’s Live Now in Early Access!",
      path: "/detail2",
    },
    {
      img: img4,
      text: "The Importance of Communication: A Lifeline for Everyone",
      path: "/detail4",
    },

    {
      img: img3,
      text: "BEAT YOUR ANXIETY. Here's how to really get to know someone",
      path: "/detail3",
    },
    {
      img: img6,
      text: "Reflections: “A Letter to My Past Self ” by Phil De Vera",
      path: "/detail1",
    },
  ];

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 2 + items.length) % items.length);
  };

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 2) % items.length);
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
            Revolutionizing Social Connections: MAI’s Live Now in Early Access!
          </div>

          <div className="text-container">
            <div className="custom-text">SocialConnections</div>
            <div className="custom-text">EarlyAccess</div>
            <div className="custom-text">SocialAnxietySupport</div>
            <div className="custom-text">InnovativeApp</div>
          </div>

          <div className="date-container">
            <div className="line"></div>
            <div className="date-text">02.08.2024</div>
            <div className="line"></div>
          </div>
        </div>

        <div className="col-lg-6 sc">
          <div className="detail-titles">
            <div className="title-icon">
              <img src={img5} alt="" className="img-fluid" />
            </div>
            <div className="detail-title">
              <div>
                Experience a new era of social connections with MAI's early
                access launch! Designed to support individuals with social
                anxiety, MAI fosters genuine interactions through personalized
                digital replicas. Dive into a safe and encouraging environment,
                backed by advanced algorithms and extensive research. Join us in
                revolutionizing online interactions and building connections
                that truly matter.
              </div>
            </div>
          </div>
          <div className="detail-img">
            <img src={img1} alt="" className="img-fluid AI" />
            <div className="description">
              An AI-generated image of Phil done by our very our team :)
            </div>
          </div>

          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              With the vibrant energy of mid-summer upon us, we’re beyond
              thrilled to announce the launch of MAI's early access version!
            </div>

            <div className="detail-paragraph">
              Our team is brimming with excitement and passion to share this
              groundbreaking app with you. This season of sunshine, growth, and
              new adventures couldn’t be a more perfect backdrop for unveiling
              our innovative app designed to support individuals experiencing
              social anxiety. This is not just the start of a new app, but the
              beginning of a journey towards creating meaningful connections and
              fostering a supportive community.
            </div>
          </div>
          <div className="detail-title2">What is MAI?</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              The goal of MAI is to facilitate social contacts in a secure and
              encouraging setting, especially for those who suffer from SAD. MAI
              stands out in the crowded landscape of social apps by offering a
              unique feature: users can create a digital replica of themselves.
              This replica interacts with other users, and over time, the system
              evaluates the compatibility between the user and the replica. Once
              a high level of compatibility is reached, users can send
              connection requests to each other. This innovative approach
              ensures that connections are based on meaningful interactions
              rather than superficial criteria.
            </div>
          </div>
          <div className="detail-title2">The USP of MAI</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Unlike other social apps that often rely on surface-level
              matchmaking, MAI emphasizes genuine compatibility through real
              interactions. This approach is particularly beneficial for
              individuals with SAD, providing them with a safe space to practice
              social interactions without the immediate pressure of face-to-face
              meetings.
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              1. Support for People with Social Anxiety Disorder (SAD)
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">2. High Personalization</div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">3. Compatibility Evaluation</div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              4. Safe Interaction with Virtual Selves
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">5. Broad social Benefits</div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">6. Intentional Connection</div>
          </div>

          <div className="detail-img">
            <img
              src={img2}
              alt=""
              className="img-fluid AI"
              //   style={{ width: "100%", height: "723px" }}
            />
            <div className="description">
              An AI-generated image of Phil done by our very our team :)
            </div>
          </div>

          <div className="detail-title2">The Science Behind MAI</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              MAI's development is grounded in extensive research and
              sophisticated algorithms. The app's ability to accurately assess
              compatibility through conversations is a testament to its advanced
              technological foundation. By leveraging these technologies, MAI
              ensures that users experience high-quality interactions and
              connections that have the potential for growth and depth.
            </div>

            <div className="detail-img">
              <img
                src={img7}
                alt=""
                className="img-fluid AI"
                style={{ width: "100%", height: "723px" }}
              />
              <div className="description">
                An AI-generated image of Phil done by our very our team :)
              </div>
            </div>
            <div className="detail-paragraph">
              MAI's creation wasn't without some difficulties. Making sure the
              app's replicas could provide highly tailored and real-world
              experiences was one of the biggest challenges. It took a lot of
              study and development to do this, integrating ideas from the
              fields of artificial intelligence, psychology, and user experience
              design.
            </div>
            <div className="detail-paragraphs">
              <div className="detail-paragraph">
                Our team put in a lot of effort to optimize the algorithms that
                underpin MAI's compatibility evaluations. In order to
                continually enhance the app's functionality and make sure it
                satisfied users' demands, we carried out a number of beta tests
                and collected user feedback.
              </div>
            </div>
            <div className="detail-paragraphs">
              <div className="detail-paragraph">
                Creating an interface that was both user-friendly and
                entertaining was another obstacle. We want MAI to be usable by
                people of all ages and technological backgrounds. We produced a
                visually appealing and intuitively navigable, user-friendly
                design after several revisions and user testing sessions.
              </div>
            </div>
          </div>

          <div className="detail-title2">
            Embracing the Future of Social Interaction
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              MAI is not just an app; it's a movement towards a more inclusive
              and connected society. By focusing on genuine compatibility and
              providing a safe environment for all users, MAI is set to change
              the way we interact online. As MAI officially goes live in early
              access, we invite you to join our community and be part of this
              revolutionary journey.
            </div>
          </div>

          <div className="detail-title2">
            Don't miss out on this opportunity to be part of something truly
            special.
          </div>

          <div className="dt2">
            Download{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MAI
            </a>{" "}
            today and start building connections that matter.
          </div>
          <div className="detail-img">
            <img
              src={img8}
              alt=""
              className="img-fluid AI"
              style={{ width: "100%", height: "723px" }}
            />
          </div>
          <div className="description" style={{ color: "#7a7782" }}>
            An AI-generated image of Phil done by our very our team :)
          </div>
        </div>
        <div className="row dt-ft">
          <div className="col-lg-1 col-1 d-flex align-items-center justify-content-center">
          <img className="img-fluid arrow" src={arrowL} alt="" onClick={prevItem}/>
          </div>
          {items.map((item, index) => (
            <div
              className={`col-lg-5 col-10 ft ${
                index === currentItem ||
                (isLargeScreen && index === (currentItem + 1) % items.length)
                  ? "active"
                  : "hidden"
              }`}
              key={index}
              onClick={() => handleItemClick(item.path)}
            >
              <img src={item.img} alt="" className="img-fluid AI col-4" />
              <div className="ft-text">{item.text}</div>
            </div>
          ))}
          <div className="col-lg-1 col-1 d-flex align-items-center justify-content-center">
          <img className="img-fluid arrow" src={arrowR} alt="" onClick={nextItem}/>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default BlogDetail2;
