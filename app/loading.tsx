import React from 'react';

const HomePageLoader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <img
                src="/loader.gif" // Replace with the path to your loading GIF
                alt="Loading..."
                className="h-16 w-16"
            />
        </div>
    );
};

export default HomePageLoader;
