import React from "react";

const UploadFile = () => {
  return (
    <div className="flex items-center justify-center mx-auto h-[80vh] ">
      <div className="flex items-center  justify-center mx-auto max-w-sm  border-2 border-green-600 rounded-md p-12 bg-white bg-opacity-20">
        <form className="flex flex-col">
          <h1 className="mb-2 text-md md:text-2xl text-center font-semibold">
            Upload File
          </h1>
          <div className="flex items-center justify-center mb-2 w-full">
            <label className="relative flex flex-col items-center justify-center w-full border-gray-300 border rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-2 mb-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  Files of type: .csv/.xlsx/.xls
                </p>
              </div>
              <input
                id="dropzoneFile"
                type="file"
                className="hidden"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                // onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="flex justify-center items-center pt-0 space-y-4 sm:flex sm:space-y-0">
            <button
              id="confirm-button"
              type="submit"
              // **Disable the button if the image has not been changed**
              //   disabled={!imageChanged}
              className={`my-4 py-3 px-24 text-sm font-medium text-center text-white bg-green-600 rounded-lg sm:w-auto hover:bg-primary-800 `}
            >
              {/* **Change button text based on whether the image has been changed** */}
              Upload File
              {/* {imageChanged ? "Upload Image" : "Change Image"} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadFile;
