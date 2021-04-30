import React from "react";
import AcademyNavbar from "./components/AcademyNavbar";
import ExtendedTable from "./components/ExtendedTable";
import Smallfooter from "./components/Smallfooter";
import trophy1 from "./images/1trophy.png";
import trophy2 from "./images/2trophy.png";
import trophy3 from "./images/3trophy.png";
import "./Leaderboard.css";
const tablelabels = [
  "Rank",
  "Team",
  "Country",
  "Challenges Solved",
  "Points",
  "Solves",
];
const leaderboard = [
  {
    rank: 1,
    team_name: "Habasyujkl",
    country: "India",
    challenges_solved: 12,
    points: 850,
  },
  {
    rank: 1,
    team_name: "Habasyujkl",
    country: "India",
    challenges_solved: 12,
    points: 850,
  },
  {
    rank: 1,
    team_name: "Habasyujkl",
    country: "India",
    challenges_solved: 12,
    points: 850,
  },
];

function Leaderboard() {
  return (
    <>
      <AcademyNavbar />
      <div className="leaderboard-parent-container">
        <div>
          <h1 className="leaderboard-parent-title">Challenge XYZ Scores</h1>
        </div>
        <div className="leaderboard-trophy-container">
          <div
            className="leaderboard-trophy2-wrapper"
            style={{ backgroundImage: `url(${trophy2})` }}
          >
            <h3 style={{ color: "#6b6a6a" }} className="leaderboard-labels">
              fjksnjk
            </h3>
          </div>
          <div
            className="leaderboard-trophy1-wrapper"
            style={{ backgroundImage: `url(${trophy1})` }}
          >
            <h3 style={{ color: "#574507" }} className="leaderboard-labels">
              fjksnjk
            </h3>
          </div>
          <div
            className="leaderboard-trophy3-wrapper"
            style={{ backgroundImage: `url(${trophy3})` }}
          >
            <h3 style={{ color: "#7c1515" }} className="leaderboard-labels">
              fjksnjk
            </h3>
          </div>
        </div>
        <div>
          <h1 className="leaderboard-leaderboard-text">Leaderboard</h1>
          <ExtendedTable tablelabels={tablelabels} tablelist={leaderboard} />
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default Leaderboard;
