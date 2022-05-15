import React, { useState } from "react";
import Description from "./description";

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
        onClick={onClick}
      >
        Rules
      </button>
      {showDisplay ? <Description /> : null}
    </div>
  );
};

export default DescDisplay;
