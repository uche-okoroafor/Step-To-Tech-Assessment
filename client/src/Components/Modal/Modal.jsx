import React, { useContext } from "react";
/**
 *  <!-- Modal -->
 *
 * @component
 * @param SignUpProps
 * @returns {JSX.Element}
 */

export default function Modal() {
  const closeModel = () => {
    document.getElementById("id01").style.display = "none";
  };

  return (
    <div id="id01" className="w3-modal">
      <div className="w3-modal-content w3-card-4 w3-animate-top">
        <header className="w3-container w3-teal w3-display-container">
          <span
            onClick={closeModel}
            className="w3-button w3-teal w3-display-topright"
          >
            <i className="fa fa-remove"></i>
          </span>
          <h4>Oh snap! We just showed you a modal..</h4>
          <h5>
            Because we can <i className="fa fa-smile-o"></i>
          </h5>
        </header>
        <div className="w3-container">
          <p>Cool huh? Ok, enough teasing around..</p>
          <p>
            Go to our{" "}
            <a className="w3-text-teal" href="/w3css/default.asp">
              W3.CSS Tutorial
            </a>{" "}
            to learn more!
          </p>
        </div>
        <footer className="w3-container w3-teal">
          <p>Modal footer</p>
        </footer>
      </div>
    </div>
  );
}
