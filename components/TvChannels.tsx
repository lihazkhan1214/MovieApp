import axios from "axios";
import React, { useEffect, useState } from "react";

interface TvChannelsProps {
  selectedChannels: string[];
  setSelectedChannels: React.Dispatch<React.SetStateAction<string[]>>;
  setTotalChannels: React.Dispatch<React.SetStateAction<string[]>>;
  type: string;
}

const TvChannels: React.FC<TvChannelsProps> = ({
  selectedChannels,
  setSelectedChannels,
  setTotalChannels,
  type,
}) => {
  const [channels, setChannels] = useState<
    [{ name: string; _id: string; count: number }]
  >([]);
  const [selectAll, setSelectAll] = useState(true); // Set to true by default

  // Fetch the channels from the API when the component mounts
  useEffect(() => {
    const fetchChannels = async () => {
      setTotalChannels([]);
      setSelectedChannels([]);
      try {
        const data: [{ name: string; _id: string; count: number }] = (
          await axios.post("/api/channels", {
            type: type,
          })
        ).data;
        setChannels(data);

        const channelIds = data.map((channel) => channel.name);
        setSelectedChannels(channelIds);
        setTotalChannels(channelIds);
        setSelectAll(true);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
  }, [setSelectedChannels, type]);

  // Handle change for individual checkboxes
  const handleChange = (channelId: string) => {
    const isSelected = selectedChannels.includes(channelId);
    const newSelectedChannels = isSelected
      ? selectedChannels.filter((id) => id !== channelId)
      : [...selectedChannels, channelId];

    setSelectedChannels(newSelectedChannels);
    setSelectAll(newSelectedChannels.length === channels.length);
  };

  // Handle "Select All" checkbox change
  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedChannels([]);
    } else {
      setSelectedChannels(channels.map((channel) => channel.name));
    }
    setSelectAll(!selectAll);
  };

  // Update selectAll state when selectedChannels change
  useEffect(() => {
    setSelectAll(
      selectedChannels.length === channels.length && channels.length > 0
    );
  }, [selectedChannels, channels]);

  return (
    <div className="w-[15%] hidden xl:block  mr-14">
      <div className="p-4 w-64 h-[500px] mt-32 sticky top-20 z-10">
        <h3 className="font-bold text-xl mb-4">Tv Channels</h3>
        <div className="border-b-2 mb-2"></div>
        {/* Scrollable list with max-height */}
        <div
          className="flex flex-col space-y-2 overflow-y-auto"
          style={{ maxHeight: "350px" }}
        >
          <div className="flex items-center px-3">
            <input
              type="checkbox"
              className="mr-2 px-3"
              checked={selectAll}
              onChange={handleSelectAllChange}
            />
            <label className="text-gray-700">Select All</label>
          </div>
          {channels.map((channel) =>
            channel.count < 1 ? (
              <></>
            ) : (
              <div
                key={channel._id}
                className="flex items-center justify-between px-3"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedChannels.includes(channel.name)}
                    onChange={() => handleChange(channel.name)}
                  />
                  <label className="text-gray-700">{channel.name}</label>
                </div>
                <span className="text-gray-500 text-sm">{channel.count}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TvChannels;
