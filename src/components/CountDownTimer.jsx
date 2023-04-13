import React, { useState, useEffect } from "react";

const CountDownTimer = ({ time, toggleModal }) => {
  const [seconds, setSeconds] = useState(time * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      toggleModal(true);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="text-red-400 font-semibold">
      {minutes < 0 ? 0 : minutes}:{remainingSeconds < 10 ? "0" : ""}
      {remainingSeconds < 0 ? 0 : remainingSeconds}
    </div>
  );
};

export { CountDownTimer };
