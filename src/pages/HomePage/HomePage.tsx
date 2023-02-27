import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./HomePage.styles.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="main">
      <div className="box">
        <h2>Best Movies and TV Shows</h2>
        <p className="mainText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          venenatis porta massa id pharetra. Aenean nunc odio, semper eget nulla
          eget, aliquet placerat ipsum. Etiam quis consequat nulla. Donec
          viverra condimentum metus, sed bibendum massa fringilla quis. Donec
          scelerisque aliquet consequat. Sed hendrerit enim ac velit lobortis,
          sit amet efficitur eros elementum. Duis dignissim purus enim, at
          pretium metus gravida ac. Donec ut dignissim dui. Mauris diam justo,
          porttitor sit amet leo at, laoreet dapibus dolor. Sed libero quam,
          tincidunt quis odio elementum, varius tincidunt libero.
        </p>
        <ul>
          <li>
            <p>
              <Link className="link" to="/movies/?page=1">
                Explore Movies
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link className="link" to="/tvShows/?page=1">
                Explore TV Shows
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
