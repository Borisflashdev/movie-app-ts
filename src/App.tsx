import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import MyListPage from "./pages/MyListPage/MyListPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import TvShowsPage from "./pages/TvShowsPage/TvShows";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mylist" element={<MyListPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tvShows" element={<TvShowsPage />} />
          <Route path="/:type/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
