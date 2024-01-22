import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { recipe } = props;
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  return (
    <Link to={`/details/${idMeal}`} className="flex  flex-row shadow-amber-100 shadow-2xl mx-6 mt-12 rounded-lg">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg" src={strMealThumb} alt={strMeal} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-gray-900">
            Name: {strMeal}
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            Category: {strCategory}
          </p>
          <Link
            to={`/details/${idMeal}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
