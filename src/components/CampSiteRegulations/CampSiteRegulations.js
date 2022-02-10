import React from "react";
import styles from "./CampSiteRegulations.module.css";

const CampSiteRegulations = (props) => {
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
