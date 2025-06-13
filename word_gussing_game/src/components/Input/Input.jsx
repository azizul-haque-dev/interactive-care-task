import "./input.css";

const styleType = {
  TEXT: "text",
  NUMBER: "number"
};

function Input({ type = "text", style = styleType.TEXT, maxLength = 1 }) {
  //   const { type = "text", style = styleType.TEXT, maxLength = 1 } = props;

  //   const className = `input_${style}`;

  return (
    <input type={type} className={`input_${style}`} maxLength={maxLength} />
  );
}
Input.style = styleType;

export default Input;
