import React from "react";
import "./Buy.scss";
import { Link } from "react-router-dom";

function Buy() {
  return (
    <div className="buy">
      <div class="buy-box">
        <div class="buy-info">
          <div class="buy-top">
            <p>Buy or Sell</p>
            <h3>
              Looking to Buy a new property or Sell an existing one? Real Homes
              provides an easy solution!
            </h3>

            <div class="buy-bottom">
              <Link to="/Submit">
                Submit Property
              </Link>
              <Link to="/Search">
                Browse Properties
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
