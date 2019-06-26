import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./animation.json";
import "./App.css";

function App() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  console.log("isStopped", isStopped);
  console.log("isPaused", isPaused);

  const buttonStyle = {
    display: "block",
    margin: "10px auto"
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} isStopped={isStopped} isPaused={isPaused} />
      <button style={buttonStyle} onClick={() => setIsStopped(true)}>
        stop
      </button>
      <button style={buttonStyle} onClick={() => setIsStopped(false)}>
        play
      </button>
      <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>
        pause
      </button>
    </div>
  );
}

export default App;
