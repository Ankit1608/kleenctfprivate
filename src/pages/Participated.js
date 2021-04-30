import React from "react";
import "./Participated.css";
import ExtendedTable from "./components/ExtendedTable";

import brokentrophy from "./images/brokentrophy.png";
import AcademyNavbar from "./components/AcademyNavbar";
import Smallfooter from "./components/Smallfooter";
const tablelabels = [
  "Rank",
  "Team",
  "Country",
  "Challenges Solved",
  "Points",
  "Solves",
];
const leaderboard = [];
function Participated() {
  return (
    <>
      <AcademyNavbar />
      <div className="participated-parent-container">
        <h1 className="participated-title-text"> Participated Contests</h1>
        <div className="participated-table-container">
          <ExtendedTable tablelabels={tablelabels} tablelist={leaderboard} />
        </div>
        {leaderboard.length === 0 && (
          <div className="debug">
            <div
              className="broken-trophy-container"
              style={{ backgroundImage: `url(${brokentrophy})` }}
            />
          </div>
        )}
      </div>
      <Smallfooter />
    </>
  );
}

export default Participated;
