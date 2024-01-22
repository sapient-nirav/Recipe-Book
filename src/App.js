import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/apiData/home";
import Listing from "./components/pages/apiData/listing";
import MealData from "./components/pages/apiData/mealData";
import Navbar from "./components/ui/navbar";
import AddNewRecipe from "./components/pages/localStorage/addNewRecipe";
import ListingFromLocal from "./components/pages/localStorage/listingFromLocal";
import MealDataLocal from "./components/pages/localStorage/mealDataLocal";
import SignUp from "./components/pages/signUp";
import Login from "./components/pages/login";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);

  return (
    <Router>
      {isLoggedIn ? <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />:""}
      
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/listings"
          element={isLoggedIn ? <Listing /> : <Navigate to="/login" />}
        />
        <Route path="/listings-local" element={<ListingFromLocal />} />
        <Route
          path="/details/:id"
          element={isLoggedIn ? <MealData /> : <Navigate to="/login" />}
        />
        <Route
          path="/details-local/:id"
          element={isLoggedIn ? <MealDataLocal /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-recipe"
          element={isLoggedIn ? <AddNewRecipe /> : <Navigate to="/login" />}
        />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </Router>
  );
};

export default App;
