import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Confirm from "./confirmation";
import UpdateForm from "./updateForm";
const RecipeCardLocal = (props) => {
  const navigate = useNavigate();
  const { recipe, onDelete, onUpdate } = props;
  const {
    id,
    name,
    category,
    ingredients,
    instructions,
    youtubeLink,
    imageLink,
  } = recipe;
  const [showConfirm, setShowConfirm] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState({
    id,
    name,
    category,
    ingredients,
    instructions,
    youtubeLink,
    imageLink,
  });
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);

  const handleDelete = () => {
    if (isLoggedIn) {
      setShowConfirm(true);
    } else {
      navigate("/login");
    }
  };
  const handleUpdate = () => {
    if (isLoggedIn) {
      setShowUpdate(true);
    } else {
      navigate("/login");
    }
  };

  const confirmDelete = () => {
    onDelete(id);
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    onUpdate(updatedRecipe);
    setShowUpdate(false);
  };

  return (
    <div className="flex flex-row sm:flex-col shadow-amber-100 shadow-2xl mx-6 mt-12 rounded-lg ">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <Link
          to={isLoggedIn ? `/details-local/${id}` : "/login"}
          className="block"
        >
          <img src={imageLink} alt="ImageLink" className="rounded-t-lg" />
        </Link>
        <div className="p-5">
          <Link to={isLoggedIn ? `/details-local/${id}` : "/login"}>
            <h5 className="mb-2 text-2xl font-bold text-gray-900">
              Name: {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Category: {category}
            </p>
          </Link>
          <Link
            to={isLoggedIn ? `/details-local/${id}` : "/login"}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2"
          >
            Read more
          </Link>
          <button
            type="button"
            onClick={handleDelete}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="inline-flex items-center ml-3 px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-cyan-100"
          >
            Update
          </button>
        </div>
      </div>

      {showConfirm && (
        <Confirm onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
      {showUpdate && (
        <UpdateForm
          updatedRecipe={updatedRecipe}
          handleInputChange={handleInputChange}
          saveChanges={saveChanges}
          setShowUpdate={setShowUpdate}
        />
      )}
    </div>
  );
};

export default RecipeCardLocal;
