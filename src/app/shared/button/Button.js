import "./Button.css";

const Button = ({ title, cls, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className={`btn ${cls}`}>
      {title}
    </button>
  );
};

export default Button;
