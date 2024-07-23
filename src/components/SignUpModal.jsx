import React, { useState } from "react";
import Modal from "react-modal";
import "./SignUpModal.scss";
import signUpImg from "../assets/images/sign-up-image.png";
import CustomCheckbox from "./CustomCheckbox";
import SuccessMessage from '../components/SuccessMessage';

Modal.setAppElement("#root");

export default function SignUpModal({ modalIsOpen, closeModal }) {
  const [newsUpdates, setNewsUpdates] = useState(false);
  const [under18, setUnder18] = useState(false);
  const [age18to25, setAge18to25] = useState(false);
  const [age25to35, setAge25to35] = useState(false);
  const [age35plus, setAge35plus] = useState(false);
  const [fluentEnglish, setFluentEnglish] = useState(false);
  const [notFluentEnglish, setNotFluentEnglish] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [mentalHealthHistory, setMentalHealthHistory] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const resetForm = () => {
    setNewsUpdates(false);
    setUnder18(false);
    setAge18to25(false);
    setAge25to35(false);
    setAge35plus(false);
    setFluentEnglish(false);
    setNotFluentEnglish(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setLocation("");
    setMentalHealthHistory("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      location,
      mentalHealthHistory,
      newsUpdates,
      ageGroup: {
        under18,
        age18to25,
        age25to35,
        age35plus,
      },
      fluentEnglish,
      notFluentEnglish,
    };
    console.log(formData);
    closeModal();
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
    resetForm()
  };

  return (
    <>
        <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Sign Up for Waitlist"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={closeModal} className="close-modal-button">
        X
      </button>
      <div className="modal-content">
        <div className="image-container">
          <img src={signUpImg} alt="Cloud" className="modal-image" />
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name{" "}
              <span style={{ color: "rgb(128 123 130)" }}>(required)</span>
            </label>
            <div className="form-group inline">
              <input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className='form-group'>
            <label>Email <span style={{ color: 'rgb(128 123 130)' }}>(required)</span></label>
            <input
              type='email'
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <CustomCheckbox
              label="Sign up for news and updates"
              checked={newsUpdates}
              onChange={() => setNewsUpdates(!newsUpdates)}
            />
          </div>
          <div className="form-group">
            <label>
              Location{" "}
              <span style={{ color: "rgb(128 123 130)" }}>(required)</span>
            </label>
            <input
              type="text"
              placeholder="Location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>
              Did you have a history with mental health problems?{" "}
              <span style={{ color: "rgb(128 123 130)" }}>(required)</span>
            </label>
            <p className="helper-text">
              This helps us personalize your experience later on
            </p>
            <input
              type="text"
              placeholder="Writing...."
              required
              value={mentalHealthHistory}
              onChange={(e) => setMentalHealthHistory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>
              What age group are you?{" "}
              <span style={{ color: "rgb(128 123 130)" }}>(required)</span>
            </label>
            <p className="helper-text">Help us personalize the experience</p>
            <div className="checkbox-group">
              <CustomCheckbox
                label="Under 18"
                checked={under18}
                onChange={() => setUnder18(!under18)}
              />
              <CustomCheckbox
                label="18 - 25"
                checked={age18to25}
                onChange={() => setAge18to25(!age18to25)}
              />
              <CustomCheckbox
                label="25 - 35"
                checked={age25to35}
                onChange={() => setAge25to35(!age25to35)}
              />
              <CustomCheckbox
                label="35+"
                checked={age35plus}
                onChange={() => setAge35plus(!age35plus)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Are you fluent with English?</label>
            <div className="checkbox-group">
              <CustomCheckbox
                label="Yes"
                checked={fluentEnglish}
                onChange={() => setFluentEnglish(!fluentEnglish)}
              />
              <CustomCheckbox
                label="No"
                checked={notFluentEnglish}
                onChange={() => setNotFluentEnglish(!notFluentEnglish)}
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </Modal>
    <SuccessMessage show={showSuccessMessage} />
    </>
  );
}