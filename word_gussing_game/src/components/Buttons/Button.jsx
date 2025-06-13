import "./button.css";
const styleType = {
  KEYBOARD: "keyboard",
  QUESTION: "question"
};

function Button(props) {
  const {
    as = "button",
    style = styleType.KEYBOARD,
    children,
    type = "button"
  } = props;

  const className = `button_${style}`;
  const Tag = as;
  return (
    <Tag className={className} type={type}>
      {children}
    </Tag>
  );
}
Button.style = styleType;
export default Button;
