import React, { useState } from "react";
import { ReactComponent as IconMessage } from "../../assets/icon_message.svg";
import { ReactComponent as CloseMessage } from "../../assets/icon_closeMessage.svg";
import "./FloatMessage.css";

const FloatMessage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-lato">
      <div className="tawk-min-container">
        <button
          type="button"
          className="tawk-custom-color tawk-custom-border-color tawk-button tawk-button-circle tawk-button-large"
          onClick={() => {
            setShowModal(!showModal);
          }}
          style={{
            bottom: "20px",
            right: "20px",
            position: "fixed",
            zIndex: 1000,
            border: "0px",
          }}
        >
          <div isroundwidget="true">
            <div className="icon_message">
              {showModal ? (
                <CloseMessage fill="white" />
              ) : (
                <IconMessage fill="white" />
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatMessage;
