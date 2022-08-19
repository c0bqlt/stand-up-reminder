import React, { useState, useEffect } from "react";
import Settings from "./Settings";
import { Howl } from "howler";
import { NextSeo } from "next-seo";
import Footer from "./Footer";

const Timer = () => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const [standUp, setStandUp] = useState(true);
  const [newTimer, setNewTimer] = useState(25 * 60);
  var sound = new Howl({
    src: ["notificationSound.mp3"],
  });
  const handleTimeChange = (e) => {
    setSecondsLeft(e.target.value * 60);
    setNewTimer(e.target.value * 60);
  };

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
        if (secondsLeft === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active, secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0) {
      sound.play();
      setStandUp(!standUp);
      setSecondsLeft(newTimer);
    }
  }, [secondsLeft]);

  return (
    <div>
      <h1 className="font-bold text-4xl mb-5 text-center dark:text-gray-300">
        {standUp ? "Time to stand up ☝" : "Time to sit down 👇"}
      </h1>

      <NextSeo
        title={standUp ? "Time to stand up ☝" : "Time to sit down 👇"}
        description="Just a simple web app that reminds you to stand up from time to time"
      />

      <div className="font-bold text-4xl mb-5 text-center dark:text-gray-300">
        {Math.floor(secondsLeft / 60) < 10
          ? "0" + Math.floor(secondsLeft / 60)
          : Math.floor(secondsLeft / 60)}{" "}
        : {secondsLeft % 60 < 10 ? "0" + (secondsLeft % 60) : secondsLeft % 60}{" "}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setActive(!active)}
          className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out"
        >
          {active ? "Pause" : "Play"}{" "}
        </button>
        <Settings
          secondsLeft={secondsLeft}
          setSecondsLeft={setSecondsLeft}
          handleTimeChange={handleTimeChange}
          active={active}
          setActive={setActive}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Timer;
