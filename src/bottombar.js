import React from 'react';

function BottomBar({ openOverlay }) {
  return (
    <div className="bottom-bar">
      <div className="author-note">
        By: <a href="https://github.com/nickjohnsondesign" target="_blank" rel="noopener noreferrer">Nicholas Johnson</a>
      </div>
      <div className="sketch-prompt">
        What is <a href="#" onClick={openOverlay}>Sketch.Prompt</a>
      </div>
    </div>
  );
}

export default BottomBar;