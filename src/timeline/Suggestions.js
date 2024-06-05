import React from "react";
import "./Suggestions.css";
import profile1 from "../images/profile01.png";
function Suggestions() {
  return (
    <div>
      <div className="account">
        <img src={profile1} alt="" />
        <div className="name">
          <b>arshil.1610</b>
          <div className="bioname">Arshil_vahora</div>
        </div>
        <div className="switch">
          <span>Switch </span>
        </div>
      </div>
      <div className="suggested">
        <span className="sugg">Suggested for you</span>
        <span className="seeAll">See All</span>
      </div>
      <div className="suggestedAccounts">
        <div className="imgage">
          <img src={profile1} alt="" />
          <div className="details">
            <b>zero_element</b>
            <span>Followed by ritupanchasara + 29 more</span>
          </div>
          <div className="follow">
            <span>follow</span>
          </div>
        </div>
      </div>
      <div className="suggestedAccounts">
        <div className="imgage">
          <img src={profile1} alt="" />
          <div className="details">
            <b>zero_element</b>
            <span>Followed by ritupanchasara + 29 more</span>
          </div>
          <div className="follow">
            <span>follow</span>
          </div>
        </div>
      </div>
      <div className="suggestedAccounts">
        <div className="imgage">
          <img src={profile1} alt="" />
          <div className="details">
            <b>zero_element</b>
            <span>Followed by ritupanchasara + 29 more</span>
          </div>
          <div className="follow">
            <span>follow</span>
          </div>
        </div>
      </div>
      <div className="suggestedAccounts">
        <div className="imgage">
          <img src={profile1} alt="" />
          <div className="details">
            <b className="boldtext">zero_element</b>
            <span
            >
              Followed by ritupanchasara + 29 more
            </span>
          </div>
          <div className="follow">
            <span>follow</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Suggestions;
