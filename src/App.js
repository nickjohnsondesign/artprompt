import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [promptContent, setPromptContent] = useState('This is the prompt content.');

  const updatePrompt = (newContent) => {
    setPromptContent(newContent);
  };

  const updateColors = () => {
    const newTextAndBorderColor = '#000000'; // Black color

    document.body.style.color = newTextAndBorderColor;
    localStorage.setItem('textColor', newTextAndBorderColor);

    updatePromptText(newTextAndBorderColor);
  };

  useEffect(() => {
    updateColors();
  }, []);

  const updatePromptText = (color) => {
    document.querySelector('.centered-prompt').style.color = color;
  };

  const changeDay = () => {
    const currentDay = new Date().getDate();
    localStorage.setItem('day', currentDay.toString());
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="centered-prompt">
        <p>{promptContent}</p>
      </div>
      <button onClick={changeDay}>Change Day</button>
    </div>
  );
}

export default App;
