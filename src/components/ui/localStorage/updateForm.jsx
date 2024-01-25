import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const UpdateForm = ({
  updatedRecipe,
  handleInputChange,
  saveChanges,
  setShowUpdate,
}) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="fixed top-9 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <form
        className={`bg-${
          isDarkMode ? "white" : "black"
        } relative mt-4 space-y-4 shadow-xl p-5 border-2 rounded-md max-w-2xl w-full md:w-[700px]`}
      >
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-extrabold"
          onClick={() => setShowUpdate(false)}
        >
          ✕
        </button>
        <div className="flex flex-col">
          <label
            className={`text-lg font-semibold mb-1 text-${
              isDarkMode ? "black" : "white"
            }`}
            htmlFor="id"
          >
            Id
          </label>
          <input
            type="text"
            readOnly
            value={updatedRecipe.id}
            className={`${
              isDarkMode ? "bg-white text-black" : "text-white bg-black"
            } border border-gray-300 p-2 rounded-md`}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`text-${
              isDarkMode ? "black" : "white"
            } text-lg font-semibold mb-1`}
            htmlFor="name"
          >
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={updatedRecipe.name}
            onChange={handleInputChange}
            className={`${
              isDarkMode ? "bg-white text-black" : "text-white bg-black"
            } border border-gray-300 p-2 rounded-md`}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`text-${
              isDarkMode ? "black" : "white"
            } text-lg font-semibold mb-1`}
            htmlFor="ingredients"
          >
            Ingredients:
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            cols="30"
            rows="5"
            value={updatedRecipe.ingredients}
            onChange={handleInputChange}
            className={`${
              isDarkMode ? "bg-white text-black" : "text-white bg-black"
            } border border-gray-300 p-2 rounded-md`}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`text-${
              isDarkMode ? "black" : "white"
            } text-lg font-semibold mb-1`}
            htmlFor="instructions"
          >
            Instructions:
          </label>
          <textarea
            id="instructions"
            name="instructions"
            cols="30"
            rows="5"
            value={updatedRecipe.instructions}
            onChange={handleInputChange}
            className={`${
              isDarkMode ? "bg-white text-black" : "text-white bg-black"
            } border border-gray-300 p-2 rounded-md`}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`text-${
              isDarkMode ? "black" : "white"
            } text-lg font-semibold mb-1`}
            htmlFor="youtubeLink"
          >
            YouTube Link:
          </label>
          <input
            id="youtubeLink"
            type="text"
            name="youtubeLink"
            value={updatedRecipe.youtubeLink}
            onChange={handleInputChange}
            className={`${
              isDarkMode ? "bg-white text-black" : "text-white bg-black"
            } border border-gray-300 p-2 rounded-md`}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={` text-${
              isDarkMode ? "black" : "white"
            } text-lg font-semibold mb-1`}
            htmlFor="imageLink"
          >
            Image Link:
          </label>
          <input
            id="imageLink"
            type="text"
            name="imageLink"
            value={updatedRecipe.imageLink}
            onChange={handleInputChange}
            className={`${
              isDarkMode ? "bg-white text-black" : "text-white bg-black"
            } border border-gray-300 p-2 rounded-md`}
          />
        </div>
        <div className="flex flex-col">
          <button
            type="button"
            onClick={saveChanges}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
