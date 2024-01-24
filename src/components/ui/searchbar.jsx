import React from "react";
import { useTheme } from "../../context/ThemeContext";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  
  const { isDarkMode } = useTheme();
  return (
    <form onSubmit={handleSubmit} className={`bg-${isDarkMode ? "gray-800" : "black"} `}>
      <input
        value={query}
        className={`shadow-md border rounded w-full  py-2 px-3  bg-${isDarkMode ? "gray-800" : "black"} shadow-2xl text-${isDarkMode ? "black" : "white"}`}
        placeholder="Search Recipe Here"
        name="query"
        disabled={isLoading}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        disabled={isLoading || !query}
        type="submit"
        className="bg-violet-500 hover:bg-violet-600 focus:ring focus:ring-violet-300 mt-5 mx-auto flex p-2 rounded-full text-xl font-bold text-white cursor-pointer"
      >Search Recipe</button>
    </form>
  );
};

export default SearchBar;
