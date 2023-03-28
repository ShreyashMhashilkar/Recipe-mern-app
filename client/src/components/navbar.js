import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {!cookies.access_token ? (
        <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </div>
      ) : (
        <div>
      <Link to="/saved-recipes">Saved Recipes</Link>
        <button onClick={logout}> Logout </button>
        </div>
      )}
    </div>
  );
};