import React, { useState, useEffect } from 'react';
import './prompt.css'; // You can create a CSS file for styling
import Font from './Font';
import Color from './Color';
import PromptStyle from './PromptStyle';

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
  const [selectedFont, setSelectedFont] = useState('');
  const [loading, setLoading] = useState(true);
  const [showPromptContent, setShowPromptContent] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const dayOfYear = getDayOfYear(currentDate);
    const promptIndex = dayOfYear % prompts.length;
    setPromptContent(prompts[promptIndex]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setShowPromptContent(true);
  }, []);

  return (
    <div className="prompt-overlay">
      <Font setSelectedFont={setSelectedFont} />
      {!loading && <PromptStyle selectedFont={selectedFont} promptContent={promptContent} />}
      <Color setPromptContent={setPromptContent} showPromptContent={showPromptContent} />
    </div>
  );
}

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default Prompt;
