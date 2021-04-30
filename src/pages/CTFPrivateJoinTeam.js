import React, { Component } from "react";
import JoinTeamImg from "./images/teamjoin.png";
import { Link } from "react-router-dom";
import CreateTeamImg from "./images/createteam.png";
import "./CTFPrivateJoinTeam.css";
import AcademyNavbar from "./components/AcademyNavbar";
import Smallfooter from "./components/Smallfooter";

class CTFPrivateJoinTeam extends Component {
  render() {
    return (
      <>
        <AcademyNavbar />
        <div className="ctfprivatejointeam-maincontainer">
          <div className="ctfprivatejointeam-container">
            <div className="ctfprivatejointeam-subcontainer">
              <div className="ctfprivatejointeam-debug">
                <div className="ctfprivatejointeam-imagecontainer">
                  <img src={JoinTeamImg} style={{ height: 100, width: 100 }} />
                </div>
              </div>
              <div className="ctfprivatejointeam-debug">
                <p className="ctfprivatejointeam-heading">Join a Team</p>
              </div>
              <div className="ctfprivatejointeam-debug">
                <p className="ctfprivatejointeam-description">
                  Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer
                  adipiscing eli cons. Lorem ipsum dolor sit amet, consec
                  adipiscing eli cons eli consectetuer adipiscing eli cons.
                  Lorem
                </p>
              </div>
              <div className="ctfprivatejointeam-debug">
                <div className="ctfprivatejointeam-joinnow">
                  <Link
                    to="/jointeam"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <p className="ctfprivatejointeam-joinnow-text">Join Now</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ctfprivatejointeam-subcontainer">
              <div className="ctfprivatejointeam-debug">
                <div className="ctfprivatejointeam-imagecontainer">
                  <img
                    src={CreateTeamImg}
                    style={{
                      height: 80,
                      width: 160,
                      paddingLeft: 20,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  />
                </div>
              </div>
              <div className="ctfprivatejointeam-debug">
                <p className="ctfprivatejointeam-heading">Make a Team</p>
              </div>
              <div className="ctfprivatejointeam-debug">
                <p className="ctfprivatejointeam-description">
                  Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer
                  adipiscing eli cons. Lorem ipsum dolor sit amet, consec
                  adipiscing eli cons eli consectetuer adipiscing eli cons.
                  Lorem
                </p>
              </div>
              <div className="ctfprivatejointeam-debug">
                <div className="ctfprivatejointeam-joinnow">
                  <Link
                    to="/createteam"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <p className="ctfprivatejointeam-joinnow-text">Join Now</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Smallfooter />
      </>
    );
  }
}

export default CTFPrivateJoinTeam;
