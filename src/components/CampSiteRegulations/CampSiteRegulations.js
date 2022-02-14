import React from "react";
import styles from "./CampSiteRegulations.module.css";

// Displays camp site regulations, resevation info, & contact info to CampView.
const CampSiteRegulations = (props) => {
  // Ensure valid info is present. Instead of returning empty values for these properties if data isn't present, the API just doesn't return the property at all, resulting in an app-breaking error.
  const emailAvailable = props.contacts.emailAddresses.length > 0;
  const phoneAvailable = props.contacts.phoneNumbers.length > 0;
  const contactAvailable = emailAvailable || phoneAvailable;

  return (
    <React.Fragment>
      <h3>Regulations {"&"} Reservations</h3>
      <p>{props.regs}</p>
      <p>{props.res}</p>
      {contactAvailable && (
        <div>
          <h3>Contact</h3>
          {emailAvailable && (
            <p>
              E-mail:{" "}
              <a
                href={`mailto:${props.contacts.emailAddresses[0].emailAddress}`}
                target="_blank"
              >
                {props.contacts.emailAddresses[0].emailAddress.toLowerCase()}
              </a>
            </p>
          )}
          {phoneAvailable && (
            <p>Phone: {props.contacts.phoneNumbers[0].phoneNumber}</p>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default CampSiteRegulations;
