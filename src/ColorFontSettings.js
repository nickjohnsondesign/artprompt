import React from 'react';

function ColorFontSettings({ selectedFont, onFontChange, onColorChange }) {
  const handleFontChange = (e) => {
    const newFont = e.target.value;
    onFontChange(newFont);
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    onColorChange(newColor);
  };

  return (
    <div className="color-font-settings">
      <label htmlFor="font-select">Select Font:</label>
      <select id="font-select" value={selectedFont} onChange={handleFontChange}>
        <option value="Alexandria">Alexandria</option>
        <option value="Arimo">Arimo</option>
        {/* Add more font options */}
      </select>

      <label htmlFor="color-input">Select Text Color:</label>
      <input type="color" id="color-input" onChange={handleColorChange} />
    </div>
  );
}

export default ColorFontSettings;
