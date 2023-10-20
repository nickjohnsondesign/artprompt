import React, { useState } from 'react';
import './prompt.css'; // You can create a CSS file for styling

function Prompt() {
  const [promptContent, setPromptContent] = useState('');

  // Function to update the prompt content
  const updatePrompt = (newContent) => {
    setPromptContent(newContent);
  };

  return (
    <div className="prompt-overlay">
      <div className="prompt-box">
        <p>{promptContent}</p>
      </div>
    </div>
  );
}

export default Prompt;