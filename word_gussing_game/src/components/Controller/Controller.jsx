import Button from "../Buttons/Button";
import Text from "../Text/Text";

function Controller() {
  return (
    <div className="controller">
      <Button style={Button.style.QUESTION}>
        <i className="bi bi-arrow-left-square-fill"></i>
      </Button>
      <Text style={Text.style.QUESTION_TITLE}>
        Lorem, imsum dolor sit amet...
      </Text>
      <Button style={Button.style.QUESTION}>
        <i className="bi bi-arrow-right-square-fill"></i>
      </Button>
    </div>
  );
}

export default Controller;
