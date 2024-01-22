import React, { useEffect, useState } from "react";
import RecipeCardLocal from "../../ui/localStorage/recipeCardLocal";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setRecipes(parsedRecipes);
    }
  }, []);
  const handleDelete = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
  };
  const handleUpdate = (updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
  };
  return (
    <div className="flex flex-wrap mx-16">
      {recipes.length > 0 ? (
        recipes.map((item, index) => (
          <RecipeCardLocal
            key={item.id}
            recipe={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      ) : (
        <p>No recipes to display...</p>
      )}
    </div>
  );
};

export default RecipeList;
