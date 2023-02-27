import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Card from "../../components/shared/Card/Card";
import Spinner from "../../components/shared/Spinner/Spinner";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./TvShowsPage.styles.css";

import Itvshows from "../../models/Itvshows";
import routes from "../../utils/api";

function TvShowsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [loadedShows, setLoadedShows] = useState([]);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") as string);

  const getShows = (pageNumber: number): void => {
    axios
      .get(routes.tvShow, {
        params: {
          page: pageNumber,
        },
      })
      .then((responseData) => {
        setIsLoading(false);
        setIsError(false);
        setLoadedShows(responseData.data.results);
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
      nav(`/tvShows/?page=${page + 1}`);
      getShows(page);
      window.scrollTo(0, 0);
    } else if (type === "previous" && page !== 1) {
      nav(`/tvShows/?page=${page - 1}`);
      getShows(page);
      window.scrollTo(0, 0);
    } else if (type === "previous" && page === 1) {
      return;
    } else if (type === "next" && page === 500) {
      return;
    }
  };

  useEffect(() => {
    getShows(page);
  }, [setIsLoading, setLoadedShows, page]);

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
      {loadedShows?.map((tv: Itvshows) => {
        return <Card data={tv} key={tv.id} />;
      })}
      {/* <BasePagination disabledPrevious={page === 1} handleClick={handleClick} /> */}
    </div>
  );
}

export default TvShowsPage;
