import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const ShowForm = ({
  showForm,
  setShowForm,
  formData,
  handleInputChange,
  handleFormSubmit,
  recipe,
}) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="fixed top-9 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <form
        className={`bg-${
          isDarkMode ? "white" : "black"
        } relative mt-4 space-y-4 shadow-xl p-5  rounded-md max-w-2xl w-[700px] border-2`}
      >
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-extrabold"
          onClick={() => setShowForm(false)}
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
            value={recipe.id}
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
            value={formData.name || ""}
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
            value={formData.ingredients || ""}
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
            value={formData.instructions || ""}
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
            value={formData.youtubeLink || ""}
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
            value={formData.imageLink || ""}
            onChange={handleInputChange}
            className={`${
              isDarkMode ? "bg-white text-black" : "text-white bg-black"
            } border border-gray-300 p-2 rounded-md`}
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
          onClick={handleFormSubmit}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ShowForm;
