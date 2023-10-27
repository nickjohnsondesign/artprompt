import React, { useState, useEffect } from 'react';

const importedFonts = [
  'Alexandria',
  'Archivo',
  'Arimo',
  'Barlow+Semi+Condensed',
  'Bebas+Neue',
  'Comfortaa',
  'Days+One',
  'DM+Sans',
  'Frank+Ruhl+Libre',
  'Inter',
  'Inter+Tight',
  'Jost',
  'Kanit',
  'League+Spartan',
  'Noto+Sans+Osmanya',
  'Noto+Sans+Tamil',
  'Nunito',
  'Oswald',
  'Outfit',
  'Poppins',
  'Questrial',
  'Roboto',
  'Saira+Semi+Condensed',
  'Scada',
  'Staatliches',
  'Syne',
  'Urbanist',
  'Yantramanav',
  'Zen+Kaku+Gothic+New',
  'Zen+Maru+Gothic',
  'Zilla+Slab',
];

function getRandomFont(previousFont) {
  let randomFont;
  do {
    randomFont = importedFonts[Math.floor(Math.random() * importedFonts.length)];
  } while (randomFont === previousFont);
  return randomFont;
}

const Font = ({ setSelectedFont }) => {
  useEffect(() => {
    // Check if there's a previously selected font in local storage
    const previousFont = localStorage.getItem('selectedFont');

    // Generate a new random font that is not the same as the previous one
    const newFont = getRandomFont(previousFont);
    
    // Store the new font in local storage
    localStorage.setItem('selectedFont', newFont);

    // Set the selected font in the parent component
    setSelectedFont(newFont);
  }, [setSelectedFont]);

  return null;
};

export default Font;
