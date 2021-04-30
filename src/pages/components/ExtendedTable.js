import React from "react";
import "./ExtendedTable.css";
import Tag from "./Tag";

function ExtendedTable({ tablelabels, tablelist }) {
  return (
    <div>
      <table
        id="leaderboard"
        style={{
          width: "100%",
          color: "#ffffff",
        }}
      >
        <tbody>
          <tr className="extendedtable-label">
            {tablelabels.map((label) => (
              <td>{label}</td>
            ))}
          </tr>
          {tablelist.map((item) => (
            <>
              <tr>
                <td>{item.rank}</td>
                <td>{item.team_name}</td>
                <td>{item.country}</td>
                <td>{item.challenges_solved}</td>
                <td>{item.points}</td>
                <td>
                  <Tag tag={"showsolves"} />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExtendedTable;
