import "./Spinner.styles.css";

function Spinner() {
  return (
    <div className="lds_ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
