import React, { useState, useEffect } from 'react';

const prompts = [
  'Frog Knight',
  'A Burning Stick',
  'Neon Alleyway',
  // ... more prompts ...
];

function PromptGenerator({ updatePrompt }) {
  useEffect(() => {
    // Logic for generating and updating prompts (daily or monthly)
    // For example, you can generate a prompt based on the current date.

    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const newPromptContent = prompts[dayOfMonth - 1]; // Assumes 0-based index

    // Call updatePrompt with the new promptContent.
    updatePrompt(newPromptContent);
  }, [updatePrompt]);

  return null; // No need to render anything in this component.
}

export default PromptGenerator;
