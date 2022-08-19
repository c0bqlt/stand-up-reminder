import React, { useState } from "react";
import ReactModal from "react-modal";
import DarkModeEnabler from "./DarkModeEnabler";
import { useTheme } from "next-themes";

const Settings = ({ secondsLeft, handleTimeChange, setActive }) => {
  const { theme, setTheme } = useTheme();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setActive(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out"
      >
        Settings
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="bg-white px-12 py-6 rounded-lg text-center max-w-md shadow-lg mx-auto my-96 dark:bg-black"
        style={{
          overlay: {
            backgroundColor:
              theme === "dark"
                ? "rgba(0, 0, 0, 0.75)"
                : "rgba(255, 255, 255, 0.75)",
          },
          content: {
            backgroundColor: theme === "dark" ? "#121212" : "white",
          },
        }}
      >
        <h3
          className={
            theme === "dark"
              ? "text-xl mb-4 font-bold text-white"
              : "text-xl mb-4 font-bold text-slate-500"
          }
        >
          Settings
        </h3>
        <label className="flex flex-col">
          <span
            className={
              theme === "dark"
                ? "text-left mb-1 font-medium text-gray-300"
                : "text-left mb-1 font-medium text-gray-900"
            }
          >
            Number of minutes
          </span>
          <input
            type="number"
            value={Math.floor(secondsLeft / 60)}
            min={1}
            max={60}
            onChange={handleTimeChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 max-w-max"
          />
        </label>
        <div className="text-left mt-4">
          <DarkModeEnabler theme={theme} setTheme={setTheme} />
        </div>
        <button
          onClick={closeModal}
          className="bg-blue-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
        >
          Close
        </button>
      </ReactModal>
    </div>
  );
};

export default Settings;
