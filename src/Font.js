import React, { useState, useEffect } from 'react';

const importedFonts = [
  'Alexandria',
  'Arimo',
  'Comfortaa',
  'Frank+Ruhl+Libre',
  'Noto+Sans+Tamil',
  'Nunito:ital,wght@1,200;1,400',
  'Oswald',
  'Roboto',
  'Saira+Semi+Condensed',
  'Scada:ital,wght@1,700',
  'Staatliches',
  'Syne',
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
    setSelectedFont(getRandomFont(''));
  }, []);

  return null;
};

export default Font;
