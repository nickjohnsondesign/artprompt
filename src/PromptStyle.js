import React, { useEffect } from 'react';

const PromptStyle = ({ selectedFont, promptContent }) => {
  const promptStyle = {
    fontFamily: selectedFont,
  };

  return (
    <div className="centered-prompt" style={promptStyle}>
      <p>{promptContent}</p>
    </div>
  );
};

export default PromptStyle;
