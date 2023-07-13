import React from "react";
import "./More.scss";
import { Link } from "react-router-dom";

function More() {
  return (
    <div className="more">
      <div className="overlay-more"></div>
      <div class="more-box">
        <div class="more-info">
          <div class="more-top">
            <p>Looking for More?</p>
            <h3>Talk to our experts or Browse through more properties.</h3>

            <div class="more-bottom">
              <Link to="/Contact">
                  Get In Touch
              </Link>
              <Link to="/Search">
                  Browse More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;
