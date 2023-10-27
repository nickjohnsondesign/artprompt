import React from 'react';
import './style.css';
function Overlay({ isOpen, closeOverlay }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlay-content">
        <p>Sketch.Prompt is a daily updated prompt to help people develop a routine to refine their skills or be a fun activity to participate in.</p>
        <button onClick={closeOverlay}>Close</button>
      </div>
    </div>
  );
}

export default Overlay;
