
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../../../context/ThemeContext";
import RecipeCard from "../../ui/apiData/recipeCard";
const api = process.env.REACT_APP_API;

const Listing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const searchRecipe = async () => {
    setIsLoading(true);

    try {
      // const url = api + query;
      // const apiResult = await fetch(url);
      // const apiData = await apiResult.json();

      const url = `${api}${query}`;
      const apiResult = await axios.get(url);
      const apiData = apiResult.data;

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
  }, [query]);

  const { isDarkMode } = useTheme();
  return (
    <div>
      <div className={`flex flex-wrap mx-16 bg-${isDarkMode ? "white" : "black"} shadow-2xl`}>
        {recipe
          ? recipe.map((item, index) => (
              <RecipeCard key={item.idMeal} recipe={item} />
            ))
          : "No recipes to display...."}
      </div>
    </div>
  );
};

export default Listing;
