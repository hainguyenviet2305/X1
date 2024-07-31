import React, { useEffect, useState } from "react";
import "./BlogDetail.scss";
import img5 from "../assets/images/img5.png";
import img2 from "../assets/images/img13.jpg";
import img3 from "../assets/images/img17.png";
import img1 from "../assets/images/img11.jpg";
import img6 from "../assets/images/img6.png";
import img4 from "../assets/images/img12.jpg";
import img7 from "../assets/images/img15.png";
import img8 from "../assets/images/img18.png";
import Menu from "../components/Menu";
import logo from "../assets/images/Header.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import arrowR from "../assets/images/arrow-right.png";
import arrowL from "../assets/images/arrow-left.png";

const BlogDetail3 = () => {
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
            BEAT YOUR ANXIETY. Here's how to really get to know someone
          </div>

          <div className="text-container">
            <div className="custom-text">SocialAnxiety</div>
            <div className="custom-text">CommunicationTips</div>
            <div className="custom-text">MAIApp</div>
            <div className="custom-text">OvercomeAnxiety</div>
          </div>

          <div className="date-container">
            <div className="line"></div>
            <div className="date-text">05.08.2024</div>
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
                Struggling with social anxiety? Discover how to confidently
                connect with others with these practical tips. Learn to initiate
                conversations, ask genuine questions, and practice active
                listening. Embrace honesty and balance in sharing about yourself
                while taking your time to build meaningful relationships.
              </div>
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
              Speaking up in a group? Attending a party with tons of strange
              faces? Engaging with a stranger? If you avoid any of the above
              situations, then you are definitely not alone. For some, these
              scenarios may induce mild discomfort, but they can lead to intense
              anxiety and panic, or even worse. The fear of being judged,
              rejected, or misunderstood often leads to avoiding social
              interactions altogether. However, building connections is an
              essential part of life, and with the right strategies, you can
              overcome these challenges.
            </div>

            <div className="detail-paragraphs">
              <div className="detail-paragraph">
                If you tend to struggle with the meet-and-greet, then here are
                some tips to help you get to know a person with greater
                confidence and ease, especially when you have social anxiety.
              </div>
            </div>

            <div class="dashed-line"></div>
          </div>
          <div className="detail-title2">1. Initiate a Conversation</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              First and foremost, if you want to get to know someone, you need
              to make an effort! This involves introducing yourself if you
              haven’t already and taking the initiative to start a conversation.
              (FYI, this is the hardest part.)
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              One method that has helped me is starting with a simple greeting
              or comment about the shared environment. For example, if you're at
              a coffee shop, you might comment on the ambiance or the menu.
              Remember, the goal is to open the door to further interaction, not
              to deliver a perfect speech.
            </div>
          </div>
          <div className="detail-title2">2. Ask Genuine Questions</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Once you've broken the ice, asking genuine questions is a great
              way to keep the conversation flowing. Preparation is key here.
              Before entering a social situation, think of a few open-ended
              questions that you can ask. These should be questions that show
              interest in the other person and also encourage them to share more
              about themselves (really important!!!)
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Here are some questions you can use:
              <ul class="custom-list">
                <li>How do you spend your free time?</li>
                <li>What are your hobbies, and how did you get into them?</li>
                <li>What goal are you working toward right now?</li>
                <li>What’s your favorite way to unwind after a hectic day?</li>
                <li>
                  If you could visit any place in the world, where would it be
                  and why?
                </li>
                <li>What book or movie left a lasting impression on you?</li>
                <li>Who do you look up to, and why?</li>
              </ul>
            </div>
          </div>
          <div className="detail-title2">3. Actively Listen</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Active listening is crucial in any conversation since it shows you
              care and want to understand the other person. Instead of planning
              my next words while the other person was still talking, I focused
              on giving the other person your full attention, making eye
              contact, and engaging with what they were saying. It's always a
              good idea to verbally acknowledge them with statements like "I
              see" or "That's interesting," and remember to wait a few seconds
              after they've finished before responding.
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              This approach not only helped me stay engaged but also showed the
              other person that I was genuinely interested and invested in our
              conversation.
            </div>
          </div>
          <div className="detail-title2">4. Be Honest</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              In conversations, being honest is crucial for building authentic
              connections. You don’t need to share all the same interests to
              form a meaningful bond. Instead, let the similarities emerge
              naturally. And if you’re feeling anxious, even just a little bit,
              it’s okay to admit it. Actually, you might be surprised at how
              understanding and supportive people can be.
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Being yourself, even if it means showing a bit of vulnerability,
              fosters a deeper connection and encourages the other person to be
              their true self as well. This approach not only helps break down
              barriers but also creates a more genuine and comfortable
              relationship.
            </div>
          </div>
          <div className="detail-img">
            <img src={img3} alt="" className="img-fluid AI" />
            <div className="description">
              An AI-generated image of Phil done by our very our team :)
            </div>
          </div>
          <div className="detail-title2">5. Talk About Yourself</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              It’s essential to strike a balance between asking questions and
              sharing information about yourself. For instance, if someone
              mentions their love for cooking, you might reveal, "You like to
              cook? That's amazing. I’m not a great cook, but I do enjoy making
              quick meals like cheese on toast or avocado salad."
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              This not only helps the other person feel more at ease but also
              creates a more engaging and reciprocal conversation. And after
              sharing a bit about yourself, you can seamlessly steer the
              conversation back to them with a related question, such as, "Did
              you teach yourself to cook?"
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Remember, while asking questions and listening are important,
              sharing about yourself is equally crucial.
            </div>
          </div>

          <div className="detail-title2">6. Don’t Rush It</div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Building relationships takes time, and it’s important not to rush
              the process. In fact, it can take more than 100 hours over a
              period of 3 months for a friendship to develop.
            </div>
            <div className="detail-paragraphs">
              <div className="detail-paragraph">
                Building relationships takes time, and it’s important not to
                rush the process. In fact, it can take
                <span style={{ whiteSpace: "nowrap", marginLeft: "5px" }}>
                  <a
                    href="https://journals.sagepub.com/doi/full/10.1177/0265407518761225"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#5953F9",
                      textDecoration: "underline",
                      textDecorationColor: "#5953F9",
                    }}
                  >
                    more than 100 hours
                  </a>
                </span>{" "}
                over a period of 3 months for a friendship to develop.
              </div>
            </div>

            <div className="detail-paragraph">
              I’ve learned that some of the best relationships grow slowly, with
              each interaction building on the last.
            </div>

            <div className="detail-title2">7. Practice Regularly</div>
            <div className="detail-paragraphs">
              <div className="detail-paragraph">
                BLike any skill, getting to know people gets easier with
                practice. The more you engage in social interactions, the more
                comfortable and confident you will become.
              </div>
              <div className="detail-paragraphs">
                <div className="detail-paragraph">
                  If you don’t know where to start or how to start, you can
                  experience MAI, our brand new app, which provides a safe and
                  supportive environment for social interactions specifically
                  designed for people with social anxiety syndrome.
                </div>
              </div>
            </div>
            <div className="detail-img">
              <img
                src={img8}
                alt=""
                className="img-fluid AI"
                style={{ width: "100%", height: "723px" }}
              />
              <div className="description">
                An AI-generated image of Phil done by our very our team :)
              </div>
            </div>
            <div className="detail-paragraph">
              With MAI, you can create a virtual copy of yourself and let other
              users interact with it. If the other user and the copy match, you
              are able to send a request. When accepted, you can start chatting
              directly with your match.
            </div>
            <div className="detail-paragraphs">
              <div className="detail-paragraph">
                Different from other social apps, MAI emphasizes compatibility
                through real interaction. Personalized copies provide a more
                enjoyable and authentic experience than generic chatbots.
                Additionally, the focus on creating a safe environment for
                people with SAD and others looking for meaningful connections
                makes this app stand out from the existing social media and
                chatbot apps on the market.
              </div>
            </div>
            <div class="dashed-line"></div>
            <div className="detail-paragraphs">
              <div className="detail-paragraph">
                Getting to know someone when you have social anxiety can be
                challenging, but it’s entirely possible with the right
                strategies and mindset. Remember, it’s okay to feel anxious, and
                it’s okay to take things at your own pace. Each step you take
                towards connecting with others is a step towards overcoming
                social anxiety and enriching your life.
              </div>
            </div>
          </div>

          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              If you have any other tips, we would love to hear from you! 
            </div>
          </div>
          <div className="detail-paragraphs">
            <div className="detail-paragraph">
              Feel free to shoot us a DM at @mai.app on Instagram!
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

export default BlogDetail3;
