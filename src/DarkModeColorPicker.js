import React, { useEffect } from 'react';
import { getRandomDarkColor, getContrastRatio } from './colorUtils';

const DarkModeColorPicker = ({ setPromptContent, showPromptContent, isNightMode }) => {
  useEffect(() => {
    let randomColor = getRandomDarkColor();

    if (isNightMode) {
      // In dark mode, adjust the lightness to get a brighter color
      randomColor = modifyColorLightness(randomColor, 80); // Increase the lightness value
    }

    while (getContrastRatio(randomColor, '#ffffff') < 4.5) {
      randomColor = getRandomDarkColor();
    }

    // Set the body background color instead of text color
    document.body.style.backgroundColor = randomColor;
    localStorage.setItem('backgroundColor', randomColor);

    if (showPromptContent) {
      setPromptContent('');
    }
  }, [setPromptContent, showPromptContent, isNightMode]);

  // Function to modify the lightness of an HSL color
  const modifyColorLightness = (color, lightness) => {
    const hsl = color.match(/\d+/g);
    const modifiedColor = `hsl(${hsl[0]}, ${hsl[1]}%, ${lightness}%)`;
    return modifiedColor;
  };

  return null;
};

export default DarkModeColorPicker;
