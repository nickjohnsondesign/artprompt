import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const targetDate = new Date();
    // Set the target time for the next prompt change, for example, 00:00:00 UTC
    targetDate.setUTCHours(0, 0, 0, 0);
    targetDate.setDate(targetDate.getDate() + 1); // Next day

    const timeDifference = targetDate - now;
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  }

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div>
      <p>Time until next prompt: {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</p>
    </div>
  );
};

export default Countdown;
