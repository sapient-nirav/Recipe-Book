import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const AddNewRecipe = () => {
  const navigate = useNavigate();

  const unique_id = uuid();
  const small_id = unique_id.slice(24, 34);
  const foodCategories = [
    { value: "Vegetarian", label: "Vegetarian" },
    { value: "Pasta", label: "Pasta" },
    { value: "Chocolate", label: "Chocolate" },
    { value: "Pancakes", label: "Pancakes" },
    { value: "Meat", label: "Meat" },
    { value: "Beef", label: "Beef" },
    { value: "Pork", label: "Pork" },
    { value: "Dessert", label: "Dessert" },
    { value: "Chicken", label: "Chicken" },
    { value: "Seafood", label: "Seafood" },
  ];

  const [recipe, setRecipe] = useState({
    id: small_id,
    name: "",
    category: "",
    ingredients: "",
    instructions: "",
    youtubeLink: "",
    imageLink: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    category: false,
    ingredients: false,
    instructions: false,
    youtubeLink: false,
    imageLink: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipes) => ({
      ...prevRecipes,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const reqFields = [
      "name",
      "category",
      "ingredients",
      "instructions",
      "youtubeLink",
      "imageLink",
    ];

    const hasErrors = reqFields.some((f) => !recipe[f]);

    if (hasErrors) {
      const updatedErrors = [];
      for (const f of reqFields) {
        updatedErrors[f] = !recipe[f];
      }

      setErrors(updatedErrors);
    } else {
      const storedRecipes = localStorage.getItem("recipes");
      let recipes = storedRecipes ? JSON.parse(storedRecipes) : [];

      if (!Array.isArray(recipes)) {
        recipes = [];
      }

      recipes.push(recipe);
      localStorage.setItem("recipes", JSON.stringify(recipes));
      navigate("/listings-local");
    }
  };

  return (
    <div className="container mx-auto mt-2">
      <form className="max-w-xl mx-auto shadow-lg p-8 bg-slate-100 rounded-lg">
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            placeholder="Recipe Name Here"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            type="text"
            className={`border  w-full py-2 px-3 rounded-lg ${
              errors.name ? "border-rose-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-rose-500 text-sm italic">
              Please enter name of the recipe here.
            </p>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor="category"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Category{" "}
          </label>
          <select
            name="category"
            id="category"
            value={recipe.category}
            onChange={handleInputChange}
            className={`border  w-full py-2 px-3 rounded-lg ${
              errors.category ? "border-rose-500" : ""
            }`}
          >
            {foodCategories.map((category) => (
              <option
                key={category.value}
                value={category.value}
                className="border rounded p-2 hover:bg-gray-50 focus:bg-gray-50"
              >
                {category.label}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-rose-500 text-sm italic">
              Please enter category of the recipe here.
            </p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Ingredients
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            placeholder="Recipe Ingredients"
            className={` border rounded-lg w-full py-2 px-3  ${
              errors.ingredients ? "border-rose-500" : ""
            }`}
            cols="30"
            rows="3"
            value={recipe.ingredients}
            onChange={handleInputChange}
          />
          {errors.ingredients && (
            <p className="text-rose-500 text-sm italic">
              Please Enter Ingredients.
            </p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="instructions"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Instructions
          </label>
          <textarea
            name="instructions"
            id="instructions"
            cols="30"
            rows="3"
            placeholder="Recipe Instructions"
            className={` border rounded-lg w-full py-2 px-3  ${
              errors.instructions ? "border-rose-500" : ""
            }`}
            value={recipe.instructions}
            onChange={handleInputChange}
          />
          {errors.instructions && (
            <p className="text-rose-500 text-sm italic">
              Please Enter Instructions.
            </p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="youtubeLink"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            YouTube Link
          </label>
          <input
            id="youtubeLink"
            placeholder="Recipe YouTube Link"
            name="youtubeLink"
            value={recipe.youtubeLink}
            onChange={handleInputChange}
            type="text"
            className={`border rounded-lg w-full py-2 px-3 ${
              errors.youtubeLink ? "border-rose-500" : ""
            }`}
          />
          {errors.youtubeLink && (
            <p className="text-rose-500 text-sm italic">
              Please enter YouTube link of the recipe here.
            </p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="imageLink"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Image Link
          </label>
          <input
            id="imageLink"
            placeholder="Recipe Image Link"
            name="imageLink"
            value={recipe.imageLink}
            onChange={handleInputChange}
            type="text"
            className={`border rounded-lg w-full py-2 px-3 ${
              errors.imageLink ? "border-rose-500" : ""
            }`}
          />
          {errors.imageLink && (
            <p className="text-rose-500 text-sm italic">
              Please enter image of the recipe here.
            </p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#065f46] hover:bg-[#d97706] text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmitBtn}
            type="submit"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewRecipe;
