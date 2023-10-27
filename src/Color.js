import React, { useEffect } from 'react';
import { getRandomDarkColor, getContrastRatio, getRandomLightColor } from './colorUtils'; 

const Color = ({ setPromptContent, showPromptContent, isNightMode }) => {
  useEffect(() => {
    let randomColor = isNightMode ? getRandomLightColor() : getRandomDarkColor();

    while (getContrastRatio(randomColor, isNightMode ? '#000000' : '#ffffff') < 4.5) {
      randomColor = isNightMode ? getRandomLightColor() : getRandomDarkColor();
    }

    document.body.style.color = randomColor;
    localStorage.setItem('textColor', randomColor);

    if (showPromptContent) {
      setPromptContent(randomColor);
    }

  }, [isNightMode]);

  return null;
};

export default Color;
