import React, { useState } from "react";
import "./FAQS.scss";
import Menu from "../components/Menu";
import logo from "../assets/images/Header.png";
import img7 from "../assets/images/img7.png";
import star from "../assets/images/star.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import divider from "../assets/images/Divider.png";
import t3 from "../assets/images/t3.png";

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
      <div className="FAQS min-vh-100">
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

        <div className="row Fcontent">
          <div className="col-lg-5">
            <div className="col-lg-9 blog-i">
            <img src={t3} className="img-fluid t3" alt="" />
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
                  Who is the MAI app designed to help?
                </div>
                <button className="faq-button">
                  {activeIndex === 1 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 1 && (
                <div className="faq-answer">
                  <div className="answer">
                    Mai app is designed to help everyone, especially people with
                    SAD (Social Anxiety Disorder) or people with disabilities in
                    society, such as people in the LGBT+ community, and who have
                    psychological problems. Individuals with this disorder often
                    fear being judged negatively by others and worry excessively
                    about embarrassing or humiliating themselves. This fear can
                    extend to interactions with strangers and concerns that
                    others will notice their anxiety. Physical symptoms such as
                    blushing, sweating, trembling, or having a shaky voice can
                    exacerbate these fears as they may cause embarrassment.
                  </div>
                  <div className="answer">
                    Consequently, people with social anxiety disorder may avoid
                    doing things or speaking to others and often steer clear of
                    situations where they might be the center of attention. They
                    may also experience anxiety in anticipation of a feared
                    activity or event, and endure intense fear or anxiety during
                    social situations. After such interactions, they tend to
                    overanalyze their performance, identifying perceived flaws
                    and expecting the worst possible consequences from any
                    negative experience during a social encounter
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
                  How can our app support people?
                </div>
                <button className="faq-button">
                  {activeIndex === 2 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 2 && (
                <div className="faq-answer">
                  <div className="answer">
                    We do not aim to have AI become a therapist, but our primary
                    aim is to facilitate meaningful connections through an
                    innovative, user-friendly mobile application specifically
                    designed to support individuals who are experiencing social
                    anxiety. Individuals with social anxiety often experience a
                    profound impact on their personal lives and the society.
                    They are at increased risk for depression, alcohol abuse,
                    and suicide attempts. Besides, In the workplace, the
                    disorder can result in decreased productivity and
                    efficiency, which can impact team dynamics and overall
                    organizational performance. On a societal level, men with
                    SAD are more likely to report dating problems, while women
                    face higher rates of difficulty speaking up in groups or
                    work situations
                  </div>
                  <div className="answer">
                    Our goal is to take advantage of a swipe-based interface and
                    artificial intelligence (AI) to create a virtual self that
                    mirrors an individual's behaviors, therefore, make it easier
                    and faster for users to discover and engage with people who
                    share their interests and preferences.
                  </div>
                  <div className="answer">
                    Moreover, the app will attempt to create a safe, inclusive
                    and non-judgmental space that empowers users to handle
                    social situations with greater ease and resilience. By
                    analyzing user data, MAI aims to provide help on improving
                    social skills and handling social situations more
                    effectively so that users can gradually build their
                    confidence and manage their anxiety in communication more
                    effectively.
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
                  Is there an age limit?
                </div>
                <button className="faq-button">
                  {activeIndex === 3 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 3 && (
                <div className="faq-answer">
                  <div className="answer">
                    ​​Our services are intended for individuals 18 years of age
                    or older only. We do not permit individuals under the age of
                    18 to use our platform. If you suspect a member is under the
                    age of 18, please use the reporting mechanism available on
                    the service.
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
                  Is it free to use MAI?
                </div>
                <button className="faq-button">
                  {activeIndex === 4 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 4 && (
                <div className="faq-answer">
                  <div className="answer">
                    Our app is completely free to use. We believe that everyone
                    should have access to tools that can help improve their
                    social skills. There are no hidden charges, subscription
                    fees, or in-app purchases required to access the core
                    features of the app. Our goal is to provide a supportive and
                    accessible platform for individuals with social disorders to
                    practice and develop their social interactions without any
                    financial burden.
                  </div>
                  <div className="faq-divider"></div>
                </div>
              )}
              <div
                className={`faq-item ${activeIndex === 5 ? "active" : ""}`}
                onClick={() => toggleFAQ(5)}
              >
                <div className="faq-text">
                  <img className="star-icon img-fluid" src={star} alt="" />
                  Privacy and security is our priority
                </div>
                <button className="faq-button">
                  {activeIndex === 5 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 5 && (
                <div className="faq-answer">
                  <div className="answer">
                    Creating the MAI app with top-notch privacy and security
                    standards demands meticulous planning and close attention to
                    detail. Here are some key steps you can take to ensure the
                    privacy and security of your users:
                  </div>
                  <div className="answer" >
                    - Implement Multi-Factor Authentication: Multi-factor
                    authentication (MFA) enhances security by requiring users to
                    verify their identity through multiple forms of
                    identification. This helps prevent unauthorized access to
                    sensitive information.
                  </div>
                  <div className="answer" >
                    - Secure Data Storage: Ensure all user data is stored
                    securely and encrypted. Additionally, implement robust
                    backup and recovery processes to protect against data loss.
                  </div>
                  <div className="answer" >
                    - Utilize Trusted AI Models: Employ AI models developed by
                    reputable researchers that have undergone extensive testing.
                    This ensures your app's recommendations are accurate and
                    reliable.
                  </div>
                  <div className="answer">
                    By following best practices and complying with regulations,
                    you can build an app that is trusted and valued by users.
                  </div>
                  <div className="faq-divider"></div>
                </div>
              )}
              <div
                className={`faq-item ${activeIndex === 6 ? "active" : ""}`}
                onClick={() => toggleFAQ(6)}
              >
                <div className="faq-text">
                  <img className="star-icon img-fluid" src={star} alt="" />
                  How can our app evaluate compatibility and match two suitable
                  users?
                </div>
                <button className="faq-button">
                  {activeIndex === 6 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 6 && (
                <div className="faq-answer">
                  <div className="answer">
                    Our app uses a sophisticated algorithm to evaluate
                    compatibility and match users. Here's how it works:
                  </div>
                  <div className="answer" >
                    - User Profile Creation: Users complete a profile detailing
                    their interests, preferences, personality traits, and social
                    interaction patterns, including both quantitative (age,
                    location, interests) and qualitative data
                    (self-descriptions, social anxiety triggers).
                  </div>
                  <div className="answer" >
                    - Behavioral Analysis: The AI analyzes user behavior and
                    interaction patterns, including content engagement,
                    communication styles, and response patterns.
                  </div>
                  <div className="answer" >
                    - Compatibility Scoring: The app uses a scoring system based
                    on shared interests, communication styles, and social
                    interaction patterns to identify compatible users.
                  </div>
                  <div className="answer" >
                    - AI Matching Algorithm: Machine learning and natural
                    language processing identify potential matches, prioritizing
                    those likely to result in positive and meaningful
                    interactions.
                  </div>
                  <div className="answer" >
                    - Feedback Loop: User feedback on interactions and matches
                    is used to refine and improve the matching algorithm over
                    time, ensuring better compatibility and user satisfaction.
                  </div>
                  <div className="faq-divider"></div>
                </div>
              )}
              <div
                className={`faq-item ${activeIndex === 7 ? "active" : ""}`}
                onClick={() => toggleFAQ(7)}
              >
                <div className="faq-text">
                  <img className="star-icon img-fluid" src={star} alt="" />
                  How can we create the AI copy version that resembles the user
                  up to 99%?
                </div>
                <button className="faq-button">
                  {activeIndex === 7 ? "-" : "+"}
                </button>
              </div>
              {activeIndex === 7 && (
                <div className="faq-answer">
                  <div className="answer">
                    We achieve this through a sophisticated process that
                    combines data collection, advanced algorithms, and
                    continuous refinement, ensuring that the AI mirrors your
                    unique communication style and personality traits:
                  </div>
                  <div className="answer" >
                    - Data Collection:
                  </div>
                  <div className="answer" >
                    + Profile Information: Users provide details on interests,
                    preferences, and personality traits.
                  </div>
                  <div className="answer" >
                    + Behavioral Data: As you interact with the app, it
                    continuously monitors and analyzes your communication style,
                    word choice, and interaction patterns. This data helps us
                    understand how you express yourself and react in different
                    situations.
                  </div>
                  <div className="answer" >
                    - Advanced Algorithms
                  </div>
                  <div className="answer" >
                    + Agent: Our AI uses the LLM Agent (Large Language Model
                    Agent) technology to replicate your unique communication
                    style. It learns from your data to understand how you phrase
                    your thoughts and how you respond to different prompts.
                  </div>
                  <div className="answer" >
                    + Behavioral Analysis: Utilizing advanced machine learning
                    algorithms, the AI predicts your reactions and emulates your
                    behavior. These algorithms are designed to learn and adapt,
                    improving their accuracy over time.
                  </div>
                  <div className="answer" >
                    - Personalization:
                  </div>
                  <div className="answer" >
                    + Contextual Understanding: It takes into account the
                    current situation and past interactions to provide relevant
                    and coherent responses that make sense within the
                    conversation's flow.
                  </div>
                  <div className="answer" >
                    + Emotional Intelligence: The AI recognizes emotional cues
                    in your language and responds appropriately, showing empathy
                    and understanding to create a more natural and engaging
                    interaction.
                  </div>
                  <div className="answer">
                    + By combining these sophisticated elements, we create an AI
                    that closely mirrors your behavior and communication style,
                    ensuring a personalized and authentic experience that
                    genuinely feels you. This method brings the experience as
                    close to real-life communication as possible by ensuring
                    that your interactions with the AI are accurate and
                    emotionally meaningful.
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