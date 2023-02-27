import axios from "axios";

import { useState, useEffect } from "react";

import Spinner from "../../components/shared/Spinner/Spinner";

import "./DetailsPage.styles.css";
// import routes from "../../utils/api";
import Imovies from "../../models/Imovies";
import Itvshows from "../../models/Itvshows";

function DetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [loadedDetails, setLoadedDetails] = useState({} as Imovies | Itvshows);

  const id = window.location.pathname;

  useEffect(() => {
    const getDetail = () => {
      axios
        .get(
          `https://api.themoviedb.org/3${id}?api_key=5b94a47e85b7ee4565f71d9571321016`
        )
        .then((responseData) => {
          setIsLoading(false);
          setLoadedDetails(responseData.data);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setIsError(true);
        });
    };
    getDetail();
  }, [setIsLoading, setLoadedDetails]);

  const backdrop = `http://image.tmdb.org/t/p/w500/${loadedDetails.backdrop_path}`;
  const poster = `http://image.tmdb.org/t/p/w500/${loadedDetails.poster_path}`;

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
    <div>
      <div className="movie_card">
        <div className="container">
          <img src={poster} alt="cover" className="cover" />

          <div className="hero" style={{ background: `url(${backdrop})` }}>
            <div className="details">
              <div className="title1">
                {loadedDetails.original_title || loadedDetails.name}
              </div>

              <div className="title2">
                {loadedDetails.tagline || loadedDetails.original_name}
              </div>

              <div className="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label className="full" title="Awesome - 5 stars"></label>
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  value="4 and a half"
                />
                <label className="half" title="Pretty good - 4.5 stars"></label>
                <input
                  type="radio"
                  id="star4"
                  name="rating"
                  value="4"
                  checked
                />
                <label className="full" title="Pretty good - 4 stars"></label>
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  value="3 and a half"
                />
                <label className="half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label className="full" title="Meh - 3 stars"></label>
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  value="2 and a half"
                />
                <label className="half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label className="full" title="Kinda bad - 2 stars"></label>
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  value="1 and a half"
                />
                <label className="half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label className="full" title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" />
                <label
                  className="half"
                  title="Sucks big time - 0.5 stars"
                ></label>
              </div>

              <span className="likes">{loadedDetails.popularity} likes</span>
            </div>
          </div>

          <div className="description">
            <div className="column2">
              <div className="column1">
                {loadedDetails.genres.map((genre) => {
                  return <span className="tag">{genre.name}</span>;
                })}
              </div>
              <p className="desc">{loadedDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
