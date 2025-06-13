import Controller from "../Controller/Controller";
import Hints from "../Hints/Hints";
import Keyboard from "../Keyboard/keyboard";
import ScoreBoard from "../ScoreBoard/ScoreBaord";

import "./wordGussing.css";

function WordGussing() {
  return (
    <div className="word_guessing">
      <div className="hints_score">
        <Hints />
        <ScoreBoard />
      </div>
      <Controller />
      <Keyboard />
    </div>
  );
}

export default WordGussing;
