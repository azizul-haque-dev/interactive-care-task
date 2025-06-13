import Button from "../Buttons/Button";
import "./Keyboard.css";
function Keyboard() {
  const keys = Array(26).fill(undefined);

  return (
    <div className="keyboard">
      {keys.map((value, index) => (
        <Button key={index} style={Button.style.KEYBOARD}>
          {String.fromCharCode(65 + index)}
        </Button>
      ))}
    </div>
  );
}

export default Keyboard;
