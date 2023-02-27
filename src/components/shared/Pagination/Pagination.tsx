import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Pagination.styles.css";

function BasePagination({
  handleClick,
  disabledPrevious,
  disabledNext,
  page,
}: {
  handleClick: Function;
  disabledPrevious: boolean;
  disabledNext: boolean;
  page: number;
}) {
  return (
    <nav className="main">
      <ul className="pagination">
        <li className="page-item">
          <button
            disabled={disabledPrevious}
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("previous")}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("0")}
          >
            {page}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("1")}
          >
            {page + 1}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("2")}
          >
            {page + 2}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("3")}
          >
            {page + 3}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("4")}
          >
            {page + 4}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("5")}
          >
            {page + 5}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("6")}
          >
            {page + 6}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("7")}
          >
            {page + 7}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("8")}
          >
            {page + 8}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("9")}
          >
            {page + 9}
          </button>
        </li>
        <li className="page-item">
          <button
            disabled={disabledNext}
            className="page-link bg-dark text-light text-decoration-none"
            onClick={() => handleClick("next")}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default BasePagination;
