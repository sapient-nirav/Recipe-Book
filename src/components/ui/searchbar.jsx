import React from "react";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        value={query}
        className="shadow-md border rounded w-full  py-2 px-3 text-gray-700 "
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
