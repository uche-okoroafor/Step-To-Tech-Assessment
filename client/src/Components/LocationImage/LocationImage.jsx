import React, { useContext } from "react";
/**
 * <!-- Image of location/map -->
 *
 * @component
 * @param SignUpProps
 * @returns {JSX.Element}
 */

export default function LocationImage() {
  return (
    <img
      src="https://www.w3schools.com/w3images/map.jpg"
      className="w3-image w3-greyscale-min"
      style={{ width: "100%" }}
      alt="location"
    />
  );
}
