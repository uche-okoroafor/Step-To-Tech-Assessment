import React, { useContext } from "react";
/**
 *  <!-- Image Header -->
 *
 * @component
 * @param SignUpProps
 * @returns {JSX.Element}
 */

export default function ImageHeader() {
  const openModel = () => {
    document.getElementById("id01").style.display = "block";
  };

  return (
    <div className="w3-display-container w3-animate-opacity">
      <img
        src="https://www.w3schools.com/w3images/sailboat.jpg"
        alt="boat"
        style={{ width: "100%", minHeight: "350px", maxHeight: "600px" }}
      />
      <div className="w3-container w3-display-bottomleft w3-margin-bottom">
        <button
          onClick={openModel}
          className="w3-button w3-xlarge w3-theme w3-hover-teal"
          title="Go To W3.CSS"
        >
          LEARN W3.CSS
        </button>
      </div>
    </div>
  );
}
