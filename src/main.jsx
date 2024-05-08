import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Search from "./Pages/Search/index";
import Home from "./Pages/Home/index";
import MovieDetails from "./Pages/MovieDetails/index.jsx";
import { Providers } from "./providers.jsx";
import { FavoriteProvider } from "./Context/favoritesContext.jsx";
import FavoritesScreen from "./Pages/FavoriteMovies/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <FavoriteProvider>
          <main
            style={{
              backgroundImage:
                "radial-gradient(var(--chakra-colors-blue-700), var(--chakra-colors-blue-950))",
              minHeight: "100dvh",
            }}
          >
            <Routes>
              <Route element={<App />} />
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<Home />} />
              <Route
                path="/details/:id"
                element={<MovieDetails />}
              />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<FavoritesScreen/>}/>
            </Routes>
          </main>
        </FavoriteProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
