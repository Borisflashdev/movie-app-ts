import { Link, useNavigate } from "react-router-dom";

import "./Card.styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Imovies from "../../../models/Imovies";
import Itvshows from "../../../models/Itvshows";

import Button from "../Button/Button";

function Card({ data }: { data: Imovies | Itvshows }) {
  const image = `http://image.tmdb.org/t/p/w500/${data.poster_path}`;

  let nav = useNavigate();

  const more = (): void => {
    if (data.name) {
      nav(`/tv/${data.id}`);
    } else {
      nav(`/movie/${data.id}`);
    }
  };

  return (
    <div className="card_layout m-3">
      <div className="card bg-dark text-light">
        <img src={image} className="image" alt="poster_img" />
        <div className="card-body">
          <h5 className="card-title">{data.original_title || data.name}</h5>
          <Button name="More" onclick={more} />
        </div>
      </div>
    </div>
  );
}

export default Card;
