import React, { useState } from "react";
import Description from "./description";
import Symbol from "../simbol";

const DescDisplay = () => {
  const [showDisplay, setShowDisplay] = useState(false);

  const onClick = () => {
    setShowDisplay(true);
    if (showDisplay === true) {
      setShowDisplay(false);
    }
  };
  return (
    <div className="rulesbutton">
      <button
        className="nes-btn is-warning"
        type="submit"
        value="Rules"
        style={{
          backgroundColor: "bisque",
          boxShadow: "1px 2px 9px #F4AAB9",
          margin: "4em",
          padding: "1em",
        }}
        onClick={onClick}
      >
        <Symbol />
      </button>
      {showDisplay ? <Description /> : null}
    </div>
  );
};

export default DescDisplay;
