import React from "react";
import "./Tag.css";

function Tag({ tag, label }) {
  return (
    <>
      {tag === "captain" && (
        <div className="tag-captain">
          <p>Captain</p>
        </div>
      )}
      {tag === "active" && (
        <div className="tag-active">
          <p>Active</p>
        </div>
      )}
      {tag === "edit" && (
        <div className="tag-edit">
          <p>Edit</p>
        </div>
      )}
      {tag === "delete" && (
        <div className="tag-edit">
          <p>Delete</p>
        </div>
      )}
      {tag === "exit" && (
        <div className="tag-edit">
          <p>Exit</p>
        </div>
      )}
      {tag === "fill-button" && (
        <div className="tag-fill-button">
          <p>{label}</p>
        </div>
      )}
      {tag === "border-button" && (
        <div className="tag-border-button">
          <p>{label}</p>
        </div>
      )}
      {tag === "showsolves" && (
        <div className="leaderboard-showsolves">Show Solves</div>
      )}
    </>
  );
}

export default Tag;
