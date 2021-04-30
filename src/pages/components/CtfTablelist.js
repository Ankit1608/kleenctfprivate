import React from "react";
import "./CtfTablelist.css";
import scoreicon from "../images/scoreicon.png";
import Tag from "../components/Tag";
import { Link } from "react-router-dom";
function CtfTablelist({ flag, tablelabels, tablelist }) {
  return (
    <>
      {flag ? (
        <div>
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist.map((item) => (
                <>
                  <tr>
                    <td>{item.team_name}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {item.status.captian === 1 && <Tag tag={"captain"} />}
                        <Tag tag={"active"} />
                      </div>
                    </td>
                    <td>{item.country}</td>
                    <td>{item.members} Members</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Tag tag={"edit"} />
                        {item.status.captian === 1 && <Tag tag={"delete"} />}
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          {" "}
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist.map((item) => (
                <>
                  <tr>
                    <td>{item.team_name}</td>
                    <td>{item.teams} joined</td>
                    <td>
                      <div>{item.start_date}</div>
                      <div className="ctftablellist-time">
                        {item.start_time}
                      </div>
                    </td>
                    <td>
                      <div>{item.end_date}</div>
                      <div className="ctftablellist-time">{item.end_time}</div>
                    </td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <Link
                        to="/leaderboard"
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className={
                            item.scores === 0
                              ? "ctftablelist-score-icon-light"
                              : "ctftablelist-score-icon"
                          }
                          style={{ backgroundImage: `url(${scoreicon})` }}
                        />
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CtfTablelist;
