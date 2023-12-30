import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import "./index.css";
import NewJeans from "./assets/newjeans.png";

export default function App() {
  const [greetingMessage, setGreetingMessage] = useState([
    "Happy New Year and Merry Christmas 2024!!",
  ]);

  const backgroundInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles
        init={backgroundInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter
            words={greetingMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>
        <div className="z-50">
          <img
            src={NewJeans}
            alt="NewJeans Logo"
            className="object-cover h-48 w-96"
          />
          <h1 className="text-white text-center font-bold mt-2">
            Hanni - Haerin - Minji - Danielle
          </h1>
        </div>
        <div className="text-white z-50 font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setGreetingMessage([
                `Happy New Year 2024! 🎉🎊  From Dapow and NewJeans`,
              ])
            }
          />
        </div>
      </div>
    </>
  );
}
