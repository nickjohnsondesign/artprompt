import React, { useState, useEffect } from 'react';
import './prompt.css'; // You can create a CSS file for styling

const prompts = [
  'Frog Knight',
  'A Burning Stick',
  'Neon Alleyway',
  'Brain Blast',
  'Burning arrow',
  'Misty Lake',
  'Chapstick Roll',
  'Bandit',
  'Mysterious Doorway',
  'Enchanted Forest',
  'Time Traveler',
  'Ancient Ruins',
  'Secret Agent',
  'Lost Treasure',
  'Glowing Crystal',
  'Pirate Ship',
  'Haunted Mansion',
  'Underwater City',
  'Space Odyssey',
  'Wild West Duel',
  'Magic Elixir',
  'Jungle Expedition',
  'Steampunk Inventor',
  'Alien Encounter',
  'Sorcerer\'s Apprentice',
  'Cursed Amulet',
  'Parallel Universe',
  'Robotic Companion',
  'Moon Base Adventure',
];
function Prompt() {
  const [promptContent, setPromptContent] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const dayOfYear = getDayOfYear(currentDate);

    // Use the day of the year to select a prompt from the list
    const promptIndex = dayOfYear % prompts.length;
    setPromptContent(prompts[promptIndex]);
  }, []);

  return (
    <div className="prompt-overlay">
      <div className="prompt-box">
        <p>{promptContent}</p>
      </div>
    </div>
  );
}

function getDayOfYear(date) {
  // Calculate the day of the year (1-366)
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default Prompt;
