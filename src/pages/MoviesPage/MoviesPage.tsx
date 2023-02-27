import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Card from "../../components/shared/Card/Card";
import Spinner from "../../components/shared/Spinner/Spinner";
import Pagination from "../../components/shared/Pagination/Pagination";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Imovies from "../../models/Imovies";
import routes from "../../utils/api";

function MoviePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") as string);

  const getMovies = (pageNumber: number): void => {
    axios
      .get(routes.movies, {
        params: {
          page: pageNumber,
        },
      })
      .then((responseData) => {
        setIsLoading(false);
        setIsError(false);
        setLoadedMovies(responseData.data.results);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  let nav = useNavigate();

  const handleClick = (type: string) => {
    if (type === "next" && page !== 500) {
      nav(`/movies?page=${page + 1}`);
      getMovies(page);
      window.scrollTo(0, 0);
    } else if (type === "previous" && page !== 1) {
      nav(`/movies?page=${page - 1}`);
      getMovies(page);
      window.scrollTo(0, 0);
    } else if (type === "previous" && page === 1) {
      return;
    } else if (type === "next" && page === 500) {
      return;
    } else {
      nav(`/movies?page=${page + parseInt(type)}`);
      getMovies(page + parseInt(type));
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    getMovies(page);
  }, [setIsLoading, setLoadedMovies, page]);

  if (isLoading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="err">Something went wrong, please try again later...</div>
    );
  }

  return (
    <div className="row justify-content-center">
      {loadedMovies.map((movie: Imovies) => {
        return <Card data={movie} key={movie.id} />;
      })}
      <Pagination
        disabledPrevious={page === 1}
        disabledNext={page === 500}
        handleClick={handleClick}
        page={page}
      />
    </div>
  );
}

export default MoviePage;
