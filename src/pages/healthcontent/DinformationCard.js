import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DinformationCard(props) {
  return (
    <div className="dinfo-cards">
      <span className="dinfo-card-icon">
        <FontAwesomeIcon className="dinfo-fa-icon" icon={props.icon} />
      </span>
      <p className="dinfo-card-title">{props.title}</p>
      <p className="dinfo-card-description">{props.description}</p>
    </div>
  );
}

export default DinformationCard;
