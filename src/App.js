import React, { useState, useEffect } from 'react';
import './style.css';
import Prompt from './prompt';
import Font from './Font';
import Color from './Color';
import PromptStyle from './PromptStyle';
import Countdown from './countdown';


function App() {
  const [selectedFont, setSelectedFont] = useState('');
  const [promptContent, setPromptContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [showPromptContent, setShowPromptContent] = useState(false);

  const promptStyle = {
    fontFamily: selectedFont,
  };

  useEffect(() => {
    setLoading(false);
  }, [promptContent]);

  useEffect(() => {
    setShowPromptContent(true);
  }, []);

  return (
    <div className="App">
      <div className="centered-prompt" style={promptStyle}>
        {showPromptContent ? <p>{promptContent}</p> : null}
      </div>
      <Countdown />
      <Color setPromptContent={setPromptContent} showPromptContent={showPromptContent} />
      <Prompt setPromptContent={setPromptContent} />
    </div>
  );
}

export default App;
