import React, { useState } from "react";
import AcademyNavbar from "./components/AcademyNavbar";
import CtfTablelist from "./components/CtfTablelist";
import Smallfooter from "./components/Smallfooter";
import "./Ctfmainpage.css";
import flag from "./images/flag.png";

const content =
  "Lorem ipsum dolor sit amet,  consectetuer adipiscing eli consectetuer adipiscing eli consectetuer ad ectetuer adipiscing eli consectetuer iscing eli consectetuer adipiscing eli consectetuer ad ectetuer adipiscing eli c adipiscing eli consectetuer adipiscing eli Lorem ipsum dolor sit amet, adipiscing eli conse. Lorem ipsum dolor sit amet,  consectetuer adipiscing eli. Lorem ipsum dolor sit amet,  consectetuer adipiscing eli consectetuer adipiscing eli cons";

const tablelabels = ["Team Names", "Teams", "Start Date", "End Date", "Scores"];
const ctfs_upcoming = [
  {
    team_name: "upcoming",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 0,
  },
  {
    team_name: "Habasyujkl",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 0,
  },
  {
    team_name: "Habasyujkl",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 0,
  },
];

const ctfs_inprogress = [
  {
    team_name: "inprogress",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 1,
  },
  {
    team_name: "Habasyujkl",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 1,
  },
  {
    team_name: "Habasyujkl",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 1,
  },
];

const ctfs_completed = [
  {
    team_name: "completed",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 1,
  },
  {
    team_name: "Habasyujkl",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 1,
  },
  {
    team_name: "Habasyujkl",
    teams: 4,
    start_date: "05 Feb, 2021",
    start_time: "13:00",
    end_date: "08 Feb, 2021",
    end_time: "15:00",
    scores: 1,
  },
];
function Ctfmainpage() {
  const [activelist, setActivelist] = useState(0);
  return (
    <>
      <AcademyNavbar />
      <div className="ctfmainpage-parent-container">
        <div className="ctfmainpage-title-container">
          <h1 className="ctfmainpage-title-text">Capture the Flag</h1>
          <div
            className="ctfmainpage-title-image"
            style={{ backgroundImage: `url(${flag})` }}
          />
        </div>
        <div className="ctfmainpage-content-container">
          <p>{content}</p>
        </div>
        <div className="ctfmainpage-sublabel-container">
          <h3
            className={
              activelist === 0
                ? "ctfmainpage-sublabel-text-active"
                : "ctfmainpage-sublabel-text"
            }
            onClick={() => setActivelist(0)}
          >
            Upcoming
          </h3>
          <h3
            className={
              activelist === 1
                ? "ctfmainpage-sublabel-text-active"
                : "ctfmainpage-sublabel-text"
            }
            onClick={() => setActivelist(1)}
          >
            Inprogress
          </h3>
          <h3
            className={
              activelist === 2
                ? "ctfmainpage-sublabel-text-active"
                : "ctfmainpage-sublabel-text"
            }
            onClick={() => setActivelist(2)}
          >
            Completed
          </h3>
        </div>
        <div className="ctfmainpage-table-container">
          {activelist === 0 && (
            <CtfTablelist tablelabels={tablelabels} tablelist={ctfs_upcoming} />
          )}
          {activelist === 1 && (
            <CtfTablelist
              tablelabels={tablelabels}
              tablelist={ctfs_inprogress}
            />
          )}
          {activelist === 2 && (
            <CtfTablelist
              tablelabels={tablelabels}
              tablelist={ctfs_completed}
            />
          )}
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default Ctfmainpage;
