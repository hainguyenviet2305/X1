import React, { useEffect, useState } from "react";
import "./BlogDetail.scss";
import img5 from "../assets/images/img5.png";
import img4 from "../assets/images/img12.jpg";
import img2 from "../assets/images/img19.png";
import img1 from "../assets/images/img11.jpg";
import img3 from "../assets/images/img17.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img15.png";
import img8 from "../assets/images/img16.png";
import Menu from "../components/Menu";
import logo from "../assets/images/Header.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import arrowR from "../assets/images/arrow-right.png";
import arrowL from "../assets/images/arrow-left.png";

const BlogDetail4 = () => {
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
            The Importance of Communication: A Lifeline for Everyone
          </div>

          <div className="text-container">
            <div className="custom-text">EffectiveCommunication</div>
            <div className="custom-text">PersonalGrowth</div>
            <div className="custom-text">ConflictResolution</div>
            <div className="custom-text">CommunicationSkills</div>
          </div>

          <div className="date-container">
            <div className="line"></div>
            <div className="date-text">01.08.2024</div>
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
                Explore the significance of effective communication in enhancing
                personal and professional relationships. Learn about common
                communication challenges, their impact, and practical strategies
                to overcome them. Discover how improving your communication
                skills can lead to better conflict resolution, personal growth,
                and mental well-being. If you face communication barriers, find
                out how our app MAI can help you express yourself more
                effectively.
              </div>
            </div>
          </div>
          <div className="detail-img">
            <img src={img4} alt="" className="img-fluid AI" />
            <div className="description">
              An AI-generated image of Phil done by our very our team :)
            </div>
          </div>
          <div className="detail-title2">
            Why You Need to Develop Strong Communication Skills
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              In both our personal and professional lives, effective
              communication is vital because it helps people express themselves
              in a clear and concise manner, better understand others, and form
              lasting relationships. In addition, communication is important in
              many other contexts. Let's take a closer look at the significance
              of communication skills:
            </div>

            <ol className="numbered-list">
              <li>
                <strong>Building Relationships:</strong> Strong communication
                skills help form and maintain relationships, whether they are
                personal, professional, or social.
              </li>
              <li>
                <strong>Expressing Needs and Desires:</strong> Clear
                communication allows individuals to articulate their needs,
                desires, and emotions, which is essential for mental and
                emotional well-being.
              </li>
              <li>
                <strong>Conflict Resolution:</strong> Effective communication is
                key to resolving conflicts and misunderstandings in a
                constructive manner.
              </li>
              <li>
                <strong>Learning and Growth:</strong> Communication facilitates
                learning by allowing individuals to share knowledge, ideas, and
                experiences.
              </li>
            </ol>

            <div className="detail-title2">
              Communication Challenges for Individuals
            </div>
            <div className="detail-paragraphs">
              <div className="detail-paragraph">
                These challenges can manifest in various ways and impact daily
                life and relationships. Let’s explore some common signs and
                symptom:
              </div>
              <ol className="numbered-list">
                <li>
                  <strong>
                    Difficulty initiating and maintaining conversations:
                  </strong>{" "}
                  Individuals with social communication challenges may struggle
                  to start conversations, keep them going, or appropriately end
                  them. They could struggle to come up with conversation
                  starters or take over discussions without listening to what
                  others have to say. Especially, people with social disorders,
                  such as social anxiety disorder often face more significant
                  barriers in maintaining conversations with others.
                </li>
                <li>
                  <strong>Limited eye contact and nonverbal cues:</strong> In
                  social interactions, nonverbal clues like body language and
                  facial emotions play an important part. It can be difficult
                  for people with social communication challenges to maintain
                  eye contact or read nonverbal signs, which makes it difficult
                  to decipher other people's intentions and feelings.
                </li>
                <li>
                  <strong>Trouble understanding and using social rules:</strong>{" "}
                  Successful social interactions require an understanding of and
                  adherence to social norms. People who have trouble with social
                  communication may find it difficult to understand social
                  standards including such as taking turns in conversations,
                  waiting for their chance to speak, or understanding
                  appropriate personal space.
                </li>
                <li>
                  <strong>
                    Challenges with turn-taking and topic maintenance:
                  </strong>{" "}
                  Effective communication involves taking turns and staying on
                  topic. Those with social communication challenges may have
                  difficulty recognizing when it is their turn to speak or
                  staying focused on the current topic of conversation. This can
                  lead to misunderstandings and difficulties in maintaining
                  meaningful interactions.
                </li>
              </ol>
            </div>
          </div>

          <div className="detail-img">
            <img src={img2} alt="" className="img-fluid AI" />
            <div className="description">
              An AI-generated image of Phil done by our very our team :)
            </div>
          </div>
          <div className="detail-title2">
            5 tips you can’t ignore if you want to improve communication
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              <ul className="bullet-list">
                <li>
                  <strong>Active Listening:</strong> Encourage people to engage
                  in active listening, which is paying close attention to what
                  is being said as opposed to merely hearing it aloud. This
                  makes it easier to comprehend the speaker's viewpoint and
                  reply correctly.
                </li>
                <li>
                  <strong>Visual Supports:</strong> Information can be better
                  understood and retained by people with social problems when it
                  is presented to them visually, such as through diagrams,
                  photos, or written instructions.
                </li>
                <li>
                  <strong>Training programs:</strong> Participating in social
                  skills training programs can provide people the abilities they
                  need to handle social situations more skillfully. Social
                  storytelling and role-playing can be especially helpful.
                </li>
                <li>
                  <strong>Technology Assists:</strong> Those who struggle with
                  speech can express themselves more readily by utilizing
                  technology, such as communication apps or devices.
                </li>
                <li>
                  <strong>Changes to the Environment:</strong> Having a
                  peaceful, sensory-friendly space might help people feel less
                  anxious and concentrate better during talks.
                </li>
              </ul>
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Don’t forget – you are not alone in facing communication
              challenges! Try to identify the specific barriers you face and
              consider what strategies might help you communicate more
              effectively. We often have an innate sense of what we need—or we
              might need to step out of our comfort zone, change our approach,
              or seek support from others to improve our communication skills.
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              If you’re unsure about the specific communication difficulties
              you’re experiencing and think you might benefit from additional
              support, you can download our app MAI. The app will help you
              express yourself more effectively. 
            </div>
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

export default BlogDetail4;
