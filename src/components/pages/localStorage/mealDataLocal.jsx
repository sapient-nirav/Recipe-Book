import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowForm from "../../ui/localStorage/showForm";
import { useTheme } from "../../../context/ThemeContext";

const MealDataLocal = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [formData, setFormData] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");

    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      const selectedRecipe = parsedRecipes.find((r) => r.id === id);

      if (selectedRecipe) {
        setRecipe(selectedRecipe);
        setFormData(selectedRecipe);
      }
    }
  }, [id]);

  const recipeIngredients =
    typeof recipe.ingredients === "string" ? recipe.ingredients : "";

  const handleUpdateClick = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    const updatedRecipe = { ...recipe, ...formData };

    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      const updatedRecipes = parsedRecipes.map((r) =>
        r.id === id ? updatedRecipe : r
      );

      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      setRecipe(updatedRecipe);
      setShowForm(false);
    }
  };

  const { isDarkMode } = useTheme();

  return (
    <div className={`bg-${isDarkMode ? "white" : "black"}`}>
      <div
        className={`bg-${
          isDarkMode ? "white" : "black" 
        } container shadow-2xl  rounded-xl  mx-auto p-4 md:p-8 lg:p-12 xl:p-16 `}
      >
        {recipe && (
          <>
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  src={recipe.imageLink}
                  alt={recipe.name}
                  className="rounded-lg mb-4 w-full md:w-64 lg:w-80 h-auto md:h-64 lg:h-80"
                />
                <button
                  type="button"
                  className="flex mx-auto bg-cyan-500 hover:bg-cyan-600 text-lg text-white font-bold py-2 px-4 rounded"
                  onClick={handleUpdateClick}
                >
                  Update Recipe
                </button>
              </div>
              <div className="md:ml-8">
                <h1
                  className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-${
                    isDarkMode ? "black" : "white"
                  }`}
                >
                  Recipe Details
                </h1>
                <h2
                  className={`text-lg md:text-2xl lg:text-3xl font-bold mb-2 text-${
                    isDarkMode ? "black" : "white"
                  }`}
                >
                  Name: {recipe.name}
                </h2>
                <div>
                  <h3
                    className={`text-md md:text-xl lg:text-2xl font-bold mb-2 text-${
                      isDarkMode ? "black" : "white"
                    }`}
                  >
                    Ingredients
                  </h3>
                  <ul className="list-disc ml-6">
                    {recipeIngredients.split("\n").map((ingredient, index) => (
                      <li
                        className={`text-${
                          isDarkMode ? "black" : "white"
                        } mb-2`}
                        key={index}
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <h3
                  className={`text-md md:text-xl lg:text-2xl font-bold mb-2 text-${
                    isDarkMode ? "black" : "white"
                  }`}
                >
                  Instructions
                </h3>
                <p
                  className={`text-sm md:text-base lg:text-lg text-gray-700 mb-4 text-${
                    isDarkMode ? "black" : "white"
                  }`}
                >
                  {recipe.instructions}
                </p>
                {recipe.youtubeLink && (
                  <a
                    href={recipe.youtubeLink}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Link For The Recipe
                  </a>
                )}
              </div>
            </div>
            {showForm && (
              <ShowForm
                showForm={showForm}
                setShowForm={setShowForm}
                formData={formData}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                recipe={recipe}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MealDataLocal;
