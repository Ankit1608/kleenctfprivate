import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CTFPrivateJoinTeamForm.css";
import AcademyNavbar from "./components/AcademyNavbar";
import SmallFooter from "./components/Smallfooter";
class CTFPrivateCreateTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: "",
    };
  }

  handleTextChange(text) {
    this.setState({ value: text });

    if (text !== "") {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  render() {
    return (
      <>
        <AcademyNavbar />
        <div className="jointeam-maincontainer">
          <div>
            <div className="jointeam-container">
              <p className="jointeam-heading">Join An Existing Team</p>
              <p className="jointeam-subheading">
                In order to participate in CTF you need to b part of a team
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 35,
                }}
              >
                <input type="text" id="jointeamform" />
              </div>
              <Link
                to="/myteams"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="jointeam-submit">Submit</div>
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
