import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CTFPrivateCreateTeam.css";
import AcademyNavbar from "./components/AcademyNavbar";
import SmallFooter from "./components/Smallfooter";
class CTFPrivateCreateTeam extends Component {
  render() {
    return (
      <>
        <AcademyNavbar />
        <div className="createteam-maincontainer">
          <div>
            <div className="createteam-container">
              <p className="createteam-heading">Create A Team</p>
              <p className="createteam-subheading">
                In order to participate in CTF you need to b part of a team
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 35,
                }}
              >
                <input id="teamnametext" type="text" />

                <input id="teamcountrytext" type="text" />
                <input id="discordlinktext" type="text" />
              </div>
              <Link
                to="/myteams"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="createteam-submit">Submit</div>
              </Link>
            </div>
          </div>
        </div>
        <SmallFooter />
      </>
    );
  }
}

export default CTFPrivateCreateTeam;
