import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Search from "./Pages/Search/index";
import Movie from "./Pages/Movie/index";
import Home from "./Pages/Home/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} />
        <Route path="/movie-verse/" element={<Home />} />
        <Route path="/movie-verse/*" element={<Home />} />
        <Route path="/movie-verse/movie/:id" element={<Movie />} />
        <Route path="/movie-verse/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
