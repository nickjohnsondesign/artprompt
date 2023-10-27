// NightMode.js
import React from 'react';

import { getRandomLightColor, getRandomDarkColor } from './colorUtils';

const NightMode = ({ isNightMode, toggleNightMode, textColor }) => {
  const handleToggle = () => {
    toggleNightMode();
  };

  return (
    <div className={`night-mode-toggle ${isNightMode ? 'night' : 'day'}`}>
      <input
        type="checkbox"
        id="night-mode-toggle"
        checked={isNightMode}
        onChange={handleToggle}
      />
      <label htmlFor="night-mode-toggle" className={`slider ${isNightMode ? 'checked' : ''}`} style={{ '--track-color': textColor }}></label>
    </div>
  );
};
export default NightMode;
