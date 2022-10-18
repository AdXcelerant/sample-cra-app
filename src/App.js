import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Player } from "@adxact/adxact-js";

const AdPlayerComponent = ({ placementKey }) => {
  const ref = React.useRef();
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    setPlayer(
      new Player()
        .setMountElement(ref.current)
        .setPlacementKey(placementKey)
        .setAdServerUrl("https://qa-ads.adxact.tech")
    );
  }, [placementKey, ref.current]);

  return (
    <div style={{ marginTop: "40px" }}>
      <div style={{ marginBottom: "15px" }}>
        <span style={{ marginRight: "25px" }} onClick={() => player.start()}>
          Start
        </span>
        <span onClick={() => player.stop()}>Stop</span>
      </div>
      <div
        style={{
          width: "300px",
          height: "250px",
          position: "relative",
        }}
        id="adxact-ad-container"
        ref={ref}
      ></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Add your <code>placementKey</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://adxcelerant.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit AdXcelerant
        </a>
        <AdPlayerComponent placementKey={"ENTER KEY HERE"} />
      </header>
    </div>
  );
}

export default App;
