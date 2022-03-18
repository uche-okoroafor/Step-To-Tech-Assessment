import React from "react";
/**
 *  <!-- Container -->
 *
 * @component
 * @param SignUpProps
 * @returns {JSX.Element}
 */

export default function Container() {
  const w3Open = () => {
    var x = document.getElementById("mySidebar");
    x.style.width = "300px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
  };
  return (
    <div className="w3-container" style={{ position: "relative" }}>
      <a
        onClick={w3Open}
        className="w3-button w3-xlarge w3-circle w3-teal"
        style={{ position: "absolute", top: "-28px", right: "24px" }}
      >
        +
      </a>
    </div>
  );
}
