import React from "react";
import "./Partners.scss";
function Partners() {
  return (
    <div className="partners">
      <div className="container">
        <div className="top">
          <span>Our</span>
          <h3>Partners</h3>
          <p>We honored to have these amazing partners.</p>
        </div>
        <ul>
          <li>
            <a>
              <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/one.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/two.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/three.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/four.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/five.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Partners;
