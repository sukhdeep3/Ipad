import React from "react";
import Menu from "./components/Menu";
import Cover from "./components/Coverflow";
import Music from "./components/Music";
import Games from "./components/Games";
import Settings from "./components/Settings";
import Songs from "./components/Songs";
import Artists from "./components/Artists";
import Albums from "./components/Albums";

function Ipod(props) {
  let components;

  if (props.menu) {
    components = <Menu move={props.move} />;
  }
  if (props.cover) {
    components = <Cover />;
  }
  if (props.music) {
    components = <Music move={props.move} />;
  }
  if (props.games) {
    components = <Games />;
  }
  if (props.settings) {
    components = <Settings />;
  }
  if (props.songs) {
    // console.log("Hello");
    components = <Songs />;
  }
  if (props.artist) {
    components = <Artists />;
  }
  if (props.album) {
    components = <Albums />;
  }

  return (
    <div className="Ipod">
      <div className="container">
        <div className="screen">{components}</div>
        <div className="buttons" onMouseEnter={props.rotate}>
          <p className="menu" onClick={props.handleMenu}>
            Menu
          </p>
          <p className="playBack">
            <i class="fa-solid fa-backward-fast"></i>
          </p>
          <p className="playFast">
            <i class="fa-solid fa-forward-fast"></i>
          </p>
          <p className="playPause">
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-pause"></i>
          </p>
          <div className="enter-btn" onClick={props.enter}></div>
        </div>
      </div>
    </div>
  );
}
export default Ipod;
