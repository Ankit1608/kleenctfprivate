import React from "react";
import "./MyTeams.css";
import { Link } from "react-router-dom";

import CtfTablelist from "./components/CtfTablelist";
import AcademyNavbar from "./components/AcademyNavbar";
import Smallfooter from "./components/Smallfooter";

const header = ["Team Name", "Status", "Country", "Members", "Status"];
const teams = [
  {
    team_name: "Haye",
    status: { captian: 1, active: 1 },
    country: "India",
    members: 5,
  },
  {
    team_name: "Haye",
    status: { captian: 0, active: 1 },
    country: "India",
    members: 5,
  },
  {
    team_name: "Haye",
    status: { captian: 0, active: 1 },
    country: "India",
    members: 5,
  },
];

function CommingSoon() {
  return (
    <>
      <AcademyNavbar />
      <div className="myteams-parent-container">
        <div className="myteams-tile-container">
          <h1 className="myteams-title-text">My Teams</h1>
          <div className="myteams-not-add-icon-container">
            <div className="myteams-icon-container">N</div>
            <Link to="/jointeam" style={{ textDecoration: "none" }}>
              <div className="myteams-icon-container">A</div>
            </Link>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <CtfTablelist flag={true} tablelabels={header} tablelist={teams} />
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default CommingSoon;
