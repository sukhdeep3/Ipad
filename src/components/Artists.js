import React from "react";

function artists() {
  return (
    <div style={styles.fullContainer}>
      <div style={styles.upperContainer}>
        <div className="img-container">
          <img
            alt="image"
            style={styles.img}
            src="https://yt3.ggpht.com/ytc/AMLnZu_GKuSXA45anTWga4TDB53lLC7fCQgzD2jtorItUw=s900-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="songDetails">
          <div>Sidhu Moose Wala</div>
        </div>
      </div>
    </div>
  );
}

export default artists;

const styles = {
  fullContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  upperContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 50,
    width: 50,
    marginRight: 9,
  },
};
