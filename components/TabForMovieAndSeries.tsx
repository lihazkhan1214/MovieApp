import React from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";

interface TabsWithIconProps {
  movieType: string; // The current selected value, e.g. "movie"
  setMovieType: (type: string) => void; // Function to update the selected value
  setSearch: (type: string) => void;
}

const TabsWithIcon: React.FC<TabsWithIconProps> = ({ movieType, setMovieType, setSearch }) => {
  const data = [
    {
      label: "Movies",
      value: "movie",
      icon: Square3Stack3DIcon,
    },
    {
      label: "Series",
      value: "series",
      icon: UserCircleIcon,
    },
  ];

  return (
    <Tabs
      value={movieType} // Controlled by the parent
      className="rounded-md"
    >
      <TabsHeader
        className="bg-gray-200 rounded-xl p-2" // Gray background for the tab header
        indicatorProps={{
          className: "bg-white shadow-xl rounded-lg", // White background for the active tab indicator
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className="text-gray-700 text-lg"
            onClick={() => { setMovieType(value); setSearch("") }} // Set the state when the tab is clicked
          >
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
};

export default TabsWithIcon;
