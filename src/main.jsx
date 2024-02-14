import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Search from "./Pages/Search/index";
import Home from "./Pages/Home/index";
import MovieDetails from "./Pages/MovieDetails/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} />
        <Route path="/movie-verse/" element={<Home />} />
        <Route path="/movie-verse/*" element={<Home />} />
        <Route path="/movie-verse/details/:id" element={<MovieDetails />} />
        <Route path="/movie-verse/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
