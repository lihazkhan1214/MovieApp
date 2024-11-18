import React from 'react';

const ToggleButton = ({ onToggle, isVisible }:any) => {
  return (
   <>
      <button 
        onClick={onToggle} 
        className="bg-gray-700 text-sm text-white p-2 mt-2 rounded">
        {isVisible ? 'Hide Channels' : 'Show Channels'}
      </button>
    
            </>
  );
};

export default ToggleButton;
