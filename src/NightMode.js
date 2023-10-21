import React from 'react';

const NightMode = ({ isNightMode, toggleNightMode }) => {
  return (
    <div className="night-mode-toggle">
      <label>
        Night Mode
        <input type="checkbox" checked={isNightMode} onChange={toggleNightMode} />
      </label>
    </div>
  );
};

export default NightMode;