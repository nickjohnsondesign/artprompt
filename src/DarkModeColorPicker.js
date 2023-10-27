import React, { useEffect, useState } from 'react';
import { getRandomDarkColor, getContrastRatio } from './colorUtils';


const DarkModeColorPicker = ({ setPromptContent, showPromptContent, isNightMode }) => {
  const [backgroundColor, setBackgroundColor] = useState(null);

  useEffect(() => {
    // Function to check the contrast ratio between two colors
    const hasSufficientContrast = (color1, color2) => {
      return getContrastRatio(color1, color2) >= 20; // Adjust this value as needed
    };
    const pickColorWithSufficientContrast = () => {
      let randomColor = getRandomDarkColor();

      if (isNightMode) {
        randomColor = modifyColorLightness(randomColor, 90); // Increase the lightness value
      }

      while (!hasSufficientContrast(randomColor, '#000000')) {
        randomColor = getRandomDarkColor();
        if (isNightMode) {
          randomColor = modifyColorLightness(randomColor, 90); // Adjust the lightness value
        }
      }

      return randomColor;
    };

    const newBackgroundColor = pickColorWithSufficientContrast();

    // Set the body background color instead of text color
    document.body.style.backgroundColor = newBackgroundColor;
    localStorage.setItem('backgroundColor', newBackgroundColor);
    setBackgroundColor(newBackgroundColor);

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
