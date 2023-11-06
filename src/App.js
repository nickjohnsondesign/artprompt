import React, { useState, useEffect } from 'react';
import './appstyle.css'; 
import './mobilestyle.css'; 
import Prompt from './prompt';
import Font from './Font';
import Color from './Color';
import PromptStyle from './PromptStyle';
import Countdown from './countdown';
import BottomBar from './bottombar';
import Overlay from './Overlay';
import NightMode from './NightMode';
import { getRandomLightColor } from './colorUtils';
import { getRandomDarkColor } from './colorUtils';
import PromptHeader from './prompthead'; // Import the PromptHeader component
import Circles from './Circles'; 

function App() {
  const [selectedFont, setSelectedFont] = useState('');
  const [promptContent, setPromptContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [showPromptContent, setShowPromptContent] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [textColor, setTextColor] = useState('');
  const [showCircles, setShowCircles] = useState(false); 
  

 
  useEffect(() => {
    const storedNightMode = localStorage.getItem('nightMode');
    if (storedNightMode !== null) {
      setIsNightMode(JSON.parse(storedNightMode));
      setShowCircles(JSON.parse(storedNightMode)); // Show circles in night mode
    }
  }, []);

  const toggleNightMode = () => {
    const newNightMode = !isNightMode;
    setIsNightMode(newNightMode);
    setShowCircles(newNightMode); // Toggle visibility of circles

    // Store the night mode preference in localStorage
    localStorage.setItem('nightMode', JSON.stringify(newNightMode));
  };

  // Pass setPromptContent to the Color component at the beginning
  const colorComponent = isNightMode ? (
    <Color setTextColor={setTextColor} isNightMode={isNightMode} />
  ) : (
    <Color setTextColor={setTextColor} />
  );

  useEffect(() => {
    document.querySelector('.slider').classList.toggle('checked');
  }, [isNightMode]);
  
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

  const promptStyle = {
    fontFamily: selectedFont,
    color: isNightMode ? 'white' : textColor, // Use textColor state for text color
    backgroundColor: isNightMode ? 'black' : 'white',
  };

  return (
    
    <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      <NightMode isNightMode={isNightMode} toggleNightMode={toggleNightMode} key={isNightMode ? 'night' : 'day'} />
      {showCircles && <Circles isNightMode={isNightMode} />}
      {isNightMode ? null : 
        <div className="centered-prompt" style={promptStyle}>
          {showPromptContent ? <p>{promptContent}</p> : null}
        </div>
      }
      <Countdown />
      {/* Render the Circles component when showCircles is true */}
      {isNightMode && showCircles ? <Circles /> : null}
      <PromptHeader />
      <PromptHeader /> 
      {colorComponent}
      <div className="message-box"></div>
      <div className="background-animation-container">
        <div className="background"></div>
      </div>

      <Prompt setPromptContent={setPromptContent} key={isNightMode ? 'night-mode' : 'light-mode'} />
      <BottomBar openOverlay={openOverlay} />
      <Overlay isOpen={isOverlayOpen} closeOverlay={closeOverlay} />
      
    </div>
  );
}
export default App;
