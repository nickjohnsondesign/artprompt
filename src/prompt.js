import React, { useState, useEffect } from 'react';
import './prompt.css'; // You can create a CSS file for styling

const prompts = [
  'Prompt 1',
  'Prompt 2',
  'Prompt 3',
  'Frog Knight',
  'A Burning Stick',
];

function Prompt() {
  const [promptContent, setPromptContent] = useState('');

  useEffect(() => {
    const lastPromptIndex = parseInt(localStorage.getItem('lastPromptIndex')) || 0;
    const lastDisplayedDate = localStorage.getItem('lastDisplayedDate');
    const currentDate = new Date().toISOString().split('T')[0];

    // Check if the date has changed
    if (lastDisplayedDate !== currentDate) {
      // Calculate the index of the next prompt
      const nextPromptIndex = (lastPromptIndex + 1) % prompts.length;

      // Set the new prompt content and update the last displayed prompt index and date
      setPromptContent(prompts[nextPromptIndex]);
      localStorage.setItem('lastPromptIndex', nextPromptIndex.toString());
      localStorage.setItem('lastDisplayedDate', currentDate);
    } else {
      // If the date hasn't changed, set the prompt to the last displayed one
      setPromptContent(prompts[lastPromptIndex]);
    }
  }, []);
  return (
    <div className="prompt-overlay">
      <div className="prompt-box">
        <p>{promptContent}</p>
      </div>
    </div>
  );
}
export default Prompt;
