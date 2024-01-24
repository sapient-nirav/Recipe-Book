import React, { useEffect, useState } from "react";
import RecipeCard from "../../ui/apiData/recipeCard";
import SearchBar from "../../ui/searchbar";
import { useTheme } from "../../../context/ThemeContext";
// import axios from "axios";
// const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const api = process.env.REACT_APP_API;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const searchRecipe = async () => {
    setIsLoading(true);

    try {
      const url = api + query;
      const apiResult = await fetch(url);
      const apiData = await apiResult.json();

      // const url = `${api}${query}`;
      // const apiResult = await axios.get(url);
      // const apiData = apiResult.data;

      const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
      console.log("Stored Recipes:", storedRecipes);

      if (apiData.meals) {
        setRecipe(apiData.meals);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchRecipe();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipe();
  };
  
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className={`flex flex-wrap mx-16 bg-${isDarkMode ? "gray-800" : "black"} shadow-2xl`}>
        {!isLoading && recipe.length > 0 ? (
          recipe.map((item, index) => (
            <RecipeCard key={item.idMeal} recipe={item} />
          ))
        ) : (
          <p>No recipes to display....</p>
        )}
      </div>
    </div>
  );
};

export default Home;
