import React from 'react';

const getRandomDarkColor = () => {
  const h = Math.floor(Math.random() * 360); // Random hue
  const s = Math.floor(Math.random() * 100); // Random saturation
  const l = Math.floor(Math.random() * 80); // Random lightness between 0% and 40%

  return `hsl(${h}, ${s}%, ${l}%)`;
};

const updateColors = () => {
  let randomDarkColor = getRandomDarkColor();

  const updatePromptText = (color) => {
    const hsl = color.match(/\d+/g).map(Number);
    const h = hsl[0];
    const s = hsl[1];
    const l = hsl[2];

    const shadowColor = `hsl(${h}, ${s}%, ${l + 10}%)`; // Increase lightness by 10%
    const shadow = `2px 2px 0px ${shadowColor}`; // Add a drop shadow

    document.querySelector('.centered-prompt').style.color = color;
    document.querySelector('.centered-prompt').style.textShadow = shadow;
  };
  // Check contrast ratio
  while (getContrastRatio(randomDarkColor, '#ffffff') < 4.5) {
    randomDarkColor = getRandomDarkColor();
  }
  const getContrastRatio = (color1, color2) => {
    const l1 = getLuminance(color1);
    const l2 = getLuminance(color2);

    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };

  const getLuminance = (color) => {
    const rgb = getRgb(color);

    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const getRgb = (color) => {
    const hsl = color.match(/\d+/g);

    if (!hsl) {
      return [0, 0, 0]; // Return black color if no match is found
    }

    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };

}
  export default updateColors;
