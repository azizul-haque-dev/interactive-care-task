import Input from "../Input/Input";
import Text from "../Text/Text";
import "./hints.css";
function Hints() {
  return (
    <div className="hints">
      <Input />
      <Text style={Text.style.ANSWER_HINTS}>A</Text>
      <Input />
      <Text style={Text.style.ANSWER_HINTS}>P</Text>
      <Input />
    </div>
  );
}

export default Hints;
