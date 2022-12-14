import React from "react";

function Music(props) {
  return (
    <div className="components">
      <div className="left-screen">
        <h2>Music</h2>

        {props.move == 1 || props.move == 4 ? (
          <div
            className="cover-icon"
            style={{
              backgroundColor: "skyblue",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            <div>All Songs</div>
            <div className="active">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        ) : (
          <div className="cover-icon">
            <div>All Songs</div>
          </div>
        )}

        {props.move == 2 ? (
          <div
            className="music-icon"
            style={{
              backgroundColor: "skyblue",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            <div>Artists</div>
            <div className="active">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        ) : (
          <div className="music-icon">
            <div>Artists</div>
          </div>
        )}

        {props.move == 3 ? (
          <div
            className="music-icon"
            style={{
              backgroundColor: "skyblue",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            <div>Albums</div>
            <div className="active">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        ) : (
          <div className="music-icon">
            <div>Albums</div>
          </div>
        )}
      </div>

      <div className="right-screen"></div>
    </div>
  );
}

export default Music;
