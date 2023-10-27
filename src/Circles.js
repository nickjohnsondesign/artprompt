import React, { useEffect, useState } from 'react';

const Circles = ({ isNightMode }) => {
  const numCircles = 100;
  const centerThreshold = 100;

  // Define the 'circles' array within the scope of the component
  const [circles, setCircles] = useState([]);

  function createRandomCircle() {
    const circle = document.createElement("div");
    circle.className = "circle";
    setCircles((prevCircles) => [...prevCircles, circle]);
    document.body.appendChild(circle);

    const size = Math.random() * 100 + 20;
    const duration = (Math.random() * 4 + 2) + "s";

    let x, y;

    do {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
    } while (isCloseToCenter(x, y));

    circle.style.left = x + "px";
    circle.style.top = y + "px";

    circle.style.border = "2px solid #3498db";
    circle.style.borderColor = getRandomBorderColor();
    circle.style.animation = `expand ${duration} linear`;

    // Add the glow effect here
    circle.style.boxShadow = "0 0 10px rgba(52, 152, 219, 0.7)";

    setTimeout(() => {
      circle.remove();
      setCircles((prevCircles) => prevCircles.filter((c) => c !== circle));
    }, parseFloat(duration) * 1000);
  }

  function getRandomBorderColor() {
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function isCloseToCenter(x, y) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    return distance < centerThreshold;
  }

  useEffect(() => {
    // Clear the circles when isNightMode changes
    if (!isNightMode) {
      circles.forEach(circle => circle.remove());
      setCircles([]);
    }
  }, [isNightMode]);

  useEffect(() => {
    // Create random circles continuously when in night mode
    let interval;
    if (isNightMode) {
      interval = setInterval(createRandomCircle, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isNightMode]);

  return (
    <div className="circles-container">
      {/* Your animation elements go here */}
    </div>
  );
};

export default Circles;
