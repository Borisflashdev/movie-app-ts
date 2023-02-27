import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import classes from "./Button.styles.css";

function Button({ name, onclick }: { name: string; onclick: Function }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onclick()}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
