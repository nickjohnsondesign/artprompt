import React, { useState, useEffect } from 'react';
import './style.css';
import Prompt from './prompt';
import Font from './Font';
import Color from './Color';
import PromptStyle from './PromptStyle';
import Countdown from './countdown';
import BottomBar from './bottombar';
import Overlay from './Overlay'; // Import the Overlay component
import NightMode from './NightMode';
import { getRandomLightColor } from './colorUtils';
import { getRandomDarkColor } from './colorUtils';

function App() {
  const [selectedFont, setSelectedFont] = useState('');
  const [promptContent, setPromptContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [showPromptContent, setShowPromptContent] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [textColor, setTextColor] = useState(''); // Separate state for text color

  // Read night mode preference from localStorage when the component mounts
  useEffect(() => {
    const storedNightMode = localStorage.getItem('nightMode');
    if (storedNightMode !== null) {
      setIsNightMode(JSON.parse(storedNightMode));
    }
  }, []);

  // Pass setPromptContent to the Color component at the beginning
  const colorComponent = isNightMode ? (
    <Color setTextColor={setTextColor} isNightMode={isNightMode} />
  ) : (
    <Color setTextColor={setTextColor} />
  );

  useEffect(() => {
    setLoading(false);
  }, [promptContent]);

  useEffect(() => {
    setShowPromptContent(true);
  }, []);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const toggleNightMode = () => {
    const newNightMode = !isNightMode;
    setIsNightMode(newNightMode);

    // Store the night mode preference in localStorage
    localStorage.setItem('nightMode', JSON.stringify(newNightMode));
  };

  const promptStyle = {
    fontFamily: selectedFont,
    color: isNightMode ? 'white' : textColor, // Use textColor state for text color
    backgroundColor: isNightMode ? 'black' : 'white',
  };

  return (
    <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      <NightMode isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
      {isNightMode ? null : (
        <div className="centered-prompt" style={promptStyle}>
          {showPromptContent ? <p>{promptContent}</p> : null}
        </div>
      )}
      <Countdown />
      {colorComponent} {/* Render the Color component here */}
      <Prompt setPromptContent={setPromptContent} key={isNightMode ? 'night-mode' : 'light-mode'} />
      <BottomBar openOverlay={openOverlay} />
      <Overlay isOpen={isOverlayOpen} closeOverlay={closeOverlay} />
    </div>
  );
}

export default App;
