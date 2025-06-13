import Tag from "../Tag/Tag";
import Text from "../Text/Text";
import "./ScoreBoard.css";
function ScoreBoard() {
  return (
    <div className="scoreBoard">
      <Tag label="score" />
      <Text as="h2" style={Text.style.SCORE}>
        1
      </Text>
    </div>
  );
}

export default ScoreBoard;
