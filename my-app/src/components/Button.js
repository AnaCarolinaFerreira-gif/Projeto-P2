import "./css/Button.css";

function Button({ value, onChange }) {

  const increaseValue = () => {
    onChange(value + 1);
  }

  const decreaseValue = () => {
    onChange(value - 1);
  }

  return (
    <div>
      <button className="incrementar-button" onClick={increaseValue}>+</button>
      <button className="decrementar-button" onClick={decreaseValue}>-</button>
    </div>
  );

}
export default Button;
