import React from "react";
import Doctor from "../../Assets/doctor-group.png";
import SolutionStep from "../horigincontent/SolutionStep";
import "../healthcontent/AboutD.css";

function AboutD() {
  return (
    <div className="dabout-section" id="aboutD">
      <div className="dabout-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="dabout-text-content">
        <h3 className="dabout-title">
          <span>About Us</span>
        </h3>
        <p className="dabout-description">
          Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="dabout-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default AboutD;
