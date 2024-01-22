import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
const MealData = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  const searchRecipe = async () => {
    const result = await fetch(
      `${process.env.REACT_APP_API1}${id}`
    );
    const data = await result.json();
    setRecipe(data.meals[0]);
  };

  // const searchRecipe = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API1}${id}`
  //     );
  //     setRecipe(response.data.meals[0]);
  //   } catch (error) {
  //     console.error("Error fetching recipe:", error);
  //   }
  // };

  useEffect(() => {
    searchRecipe();
  }, [id]);

  const getIngredientsList = () => {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (ingredient && measure) {
        ingredientsList.push(`${measure} ${ingredient}`);
      }
    }
    return ingredientsList;
  };

  return (
    <div className="container bg-slate-100 mx-auto p-8 rounded-xl shadow-2xl mt-3 flex">
      <div className="flex-shrink-0">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-lg mb-4 w-[300px] h-[300px]"
        />
      </div>
      <div className="ml-8">
        <h1 className="text-4xl font-bold mb-4">Recipe Details</h1>
        <h2 className="text-2xl font-bold mb-2">Name: {recipe.strMeal}</h2>
        <div>
          <h3 className="text-xl font-bold mb-2">Ingredients</h3>
          <ul className="list-disc ml-6">
            {getIngredientsList().map((ingredient, index) => (
              <li key={index} className="mb-2">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <h3 className="text-xl font-bold mb-2">Instructions</h3>
        <p className="text-gray-700 mb-4">{recipe.strInstructions}</p>
        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Link
          </a>
        )}
      </div>
    </div>
  );
};

export default MealData;
