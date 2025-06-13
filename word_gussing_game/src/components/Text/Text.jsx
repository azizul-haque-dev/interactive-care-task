import "./text.css";

const styleType = {
  ANSWER_HINTS: "answer_hints",
  QUESTION_TITLE: "question_title",
  SCORE: "score"
};

function Text({ as = "p", children, style = styleType.QUESTION_TITLE }) {
  // const { as = "p", children, style = styleType.QUESTION_TITLE } = props;

  // const className = `text_${style}`;

  const Tag = as;
  return <Tag className={`text_${style}`}>{children}</Tag>;
}
Text.style = styleType;

export default Text;
