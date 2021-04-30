import React, { Component } from "react";
import "./CTFPrivateLanding.css";
import { Link } from "react-router-dom";
import AcademyNavbar from "./components/AcademyNavbar";
import Smallfooter from "./components/Smallfooter";

class CTFPrivateLanding extends Component {
  render() {
    return (
      <>
        <AcademyNavbar />
        <div className="ctfprivatelanding-maincontainer">
          <div>
            <div className="ctfprivatelanding-heading">
              <h1>Matching lorem ipsum with great companies</h1>
            </div>
            <div className="ctfprivatelanding-joinnow-container">
              <div className="ctfprivatelanding-joinnow-container2">
                <p className="ctfprivatelanding-subheading">For Companies</p>
                <p className="ctfprivatelanding-description">
                  Lorem ipsum dolor sit amet, consec adipiscing eli conser
                  adipiscing eli cons. Lorem ipsum dolor sit amet, consec
                  adipiscing eli cons lorem eli. Ipsum dollar
                </p>
                <Link
                  to="/hostform"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <div className="ctfprivatelanding-joinnow">
                    <p className="ctfprivatelanding-joinnow-text">Join Now</p>
                  </div>
                </Link>
              </div>
              <div className="ctfprivatelanding-joinnow-container2">
                <p className="ctfprivatelanding-subheading">For Hackers</p>
                <p className="ctfprivatelanding-description">
                  Lorem ipsum dolor sit amet, consec adipiscing eli etuer
                  adipiscing eli cons. Lorem ipsum dolor sit amet, consec
                  adipiscing eli cons
                </p>
                <Link
                  to="/jointeamhostctf"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <div className="ctfprivatelanding-joinnow">
                    <p className="ctfprivatelanding-joinnow-text">Join Now</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="backgroundimage" />
        </div>
        <Smallfooter />
      </>
    );
  }
}

export default CTFPrivateLanding;
