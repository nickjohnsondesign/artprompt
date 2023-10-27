import React, { useState, useRef } from 'react';
import './style.css';
function BottomBar() {
  const [isHovering, setIsHovering] = useState(false);
  const sketchPromptRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="bottom-bar">
      <div className="author-note">
        By: <a href="https://github.com/nickjohnsondesign" target="_blank" rel="noopener noreferrer">Nicholas Johnson</a>
      </div>
      <div className="sketch-prompt" ref={sketchPromptRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a href="#">What is Sketch.Prompt</a>
        {isHovering && <div className="message-box">Sketch.Prompt is a daily updated prompt to help people develop a routine to refine their skills or be a fun activity to participate in.</div>}
      </div>
    </div>
  );
}

export default BottomBar;
