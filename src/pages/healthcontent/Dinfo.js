import React from "react";
import DinformationCard from "./DinformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../healthcontent/Dinfo.css"

function Dinfo() {
  return (
    <div className="dinfo-section" id="Services">
      <div className="dinfo-title-content">
        <h3 className="dinfo-title">
          <span>What We Do</span>
        </h3>
        <p className="dinfo-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="dinfo-cards-content">
        <DinformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <DinformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <DinformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faTooth}
        />
        
      </div>
    </div>
  );
}

export default Dinfo;
