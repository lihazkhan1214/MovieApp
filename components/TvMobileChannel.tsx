import React, { useState, useEffect } from 'react';

const TvChannels = () => {
  const channels = [
    { name: "BBC", count: 60 },
    { name: "CNN", count: 45 },
    { name: "Fox News", count: 35 },
    { name: "Sky News", count: 25 },
    { name: "ESPN", count: 50 },
    { name: "Discovery", count: 30 },
    { name: "MTV", count: 22 },
    { name: "HBO", count: 40 },
    { name: "Netflix", count: 55 },
    { name: "Amazon Prime", count: 48 },
    { name: "Disney+", count: 38 },
  ];

  const initialSelectedChannels = [
    true,  // BBC
    false, // CNN
    true,  // Fox News
    false, // Sky News
    true,  // ESPN
    false, // Discovery
    false, // MTV
    true,  // HBO
    false, // Netflix
    true,  // Amazon Prime
    false  // Disney+
  ];

  const [selectedChannels, setSelectedChannels] = useState(initialSelectedChannels);
  const [selectAll, setSelectAll] = useState(initialSelectedChannels.every((selected) => selected));

  const handleChange = (index:any) => {
    const newSelected = [...selectedChannels];
    newSelected[index] = !newSelected[index];
    setSelectedChannels(newSelected);
    
    if (newSelected.every((selected) => selected)) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedChannels(channels.map(() => newSelectAll));
  };

  useEffect(() => {
    setSelectAll(selectedChannels.every((selected) => selected));
  }, [selectedChannels]);

  return (
    <div className="w-full mt-4 bg-white shadow-lg rounded-lg p-4 ">
      <h3 className="font-bold text-xl mb-4">Tv Channels</h3>
      <div className="border-b-2 mb-2"></div>
      <div className="flex flex-col space-y-2 overflow-y-auto max-h-60">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectAll}
            onChange={handleSelectAllChange}
          />
          <label className="text-gray-700">Select All</label>
        </div>
        {channels.map((channel, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedChannels[index]}
                onChange={() => handleChange(index)}
              />
              <label className="text-gray-700">{channel.name}</label>
            </div>
            <span className="text-gray-500 text-sm">{channel.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvChannels;
