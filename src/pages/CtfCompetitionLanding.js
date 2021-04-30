import React from "react";
import Tag from "./components/Tag";
import AcademyNavbar from "./components/AcademyNavbar";
import SmallFooter from "./components/Smallfooter";
import "./CtfCompetitionLanding.css";
import flag from "./images/flag.png";

const ctfcompetition = {
  title: "Challenge XYZ",
  para: [
    "Lorem ipsum dolor sit amet,  consec adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer . adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer . adipiscing eli consectetuer adipiscing eli Lorem.",
    "Lorem ipsum dolor sit amet,  consec adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer . adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipisctetuer adipis",
  ],
  download:
    "Lor adipiscing eling eli  sectetuer adipiscing eli Lorem. eli consectetuer . adipiscing el consectetuer onsec adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer . adipiscing eli  sectetuer adipiscing eli Lorem.  adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer . adipiscing e consectetuer adipiscing eli Lorem.",
  submission:
    "Lorem ipsum dolor sit amet,  consectetuer adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem ipsum dolor sit amet, adipiscing eli conse. Lorem ipsum dolor sit amet,  consectetuer adipiscing eli",
};
function CtfCompetitionLanding() {
  return (
    <>
      <AcademyNavbar />
      <div className="ctf-competition-landing-parent-container">
        <div className="ctf-competition-landing-title-container">
          <h1 className="ctf-competition-landing-title-text">
            Capture the Flag
          </h1>
          <div
            className="ctf-competition-landing-title-image"
            style={{ backgroundImage: `url(${flag})` }}
          />
        </div>
        <div className="ctf-competition-landing-content-container">
          <h1 className="ctf-competition-landing-sub-title-text">
            {ctfcompetition.title}
          </h1>
          {ctfcompetition.para.map((indipara) => (
            <div className="ctf-competition-landing-pareagraph-content">
              <p>{indipara}</p>
            </div>
          ))}
          <div className="ctf-competition-landing-download-zip">
            <h4 className="ctf-competition-landing-download-title-text">
              Download Zip
            </h4>
            <p className="ctf-competition-landing-download-para-text">
              {ctfcompetition.download}
            </p>
            <div className="ctf-competition-landing-button-container1">
              <Tag tag={"fill-button"} label={"Download zip"} />
            </div>
          </div>
          <div className="ctf-competition-landing-download-zip">
            <h4 className="ctf-competition-landing-download-title-text">
              Submission
            </h4>
            <p className="ctf-competition-landing-download-para-text">
              {ctfcompetition.submission}
            </p>
            <div className="ctf-competition-landing-button-container2">
              <input
                placeholder=" Submit your answer here"
                className="ctf-competition-input-box"
              />
              <div className="ctfcompetitionsubmitbutton">
                <Tag tag={"border-button"} label={"Submit"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SmallFooter />
    </>
  );
}

export default CtfCompetitionLanding;
