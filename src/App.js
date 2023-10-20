import React, { useState, useEffect } from 'react';
import './style.css';
import Prompt from './prompt';
import Font from './Font';
import Color from './Color';
import PromptStyle from './PromptStyle';
import Countdown from './countdown';
import BottomBar from './bottombar';
import Overlay from './Overlay'; // Import the Overlay component

function App() {
  const [selectedFont, setSelectedFont] = useState('');
  const [promptContent, setPromptContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [showPromptContent, setShowPromptContent] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const promptStyle = {
    fontFamily: selectedFont,
  };

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

  return (
    <div className="App">
      <div className="centered-prompt" style={promptStyle}>
        {showPromptContent ? <p>{promptContent}</p> : null}
      </div>
      <Countdown />
      <Color setPromptContent={setPromptContent} showPromptContent={showPromptContent} />
      <Prompt setPromptContent={setPromptContent} />
      
      {/* Include the BottomBar component with the openOverlay function */}
      <BottomBar openOverlay={openOverlay} />
      
      {/* Include the Overlay component with isOpen and closeOverlay props */}
      <Overlay isOpen={isOverlayOpen} closeOverlay={closeOverlay} />
    </div>
  );
}

export default App;
