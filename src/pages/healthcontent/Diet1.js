import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Doctor from "../../Assets/doctor-picture.png";
import '../healthcontent/Diet1.css';

function Diet1() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.scrollY > 600);
    };

    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="diet-section">
        <div className="tt-section">
          <p className="tt-headline">Diet is Compulsory</p>
          <h2 className="tt-title">Act Depends on Your Diet</h2>
          <p className="tt-description">
            Talk to online doctors and get medical advice, online prescriptions,
            refills, and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p>
          <button
            className="tt-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <div className="tt-stats">
            <div className="tt-stats-container">
              <p>145k+</p>
              <p>Patients Received</p>
            </div>
            <div className="tt-stats-container">
              <p>50+</p>
              <p>Followers</p>
            </div>
            <div className="tt-stats-container">
              <p>10+</p>
              <p>Experts</p>
            </div>
          </div>
        </div>
        <div className="diet-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Diet1;
