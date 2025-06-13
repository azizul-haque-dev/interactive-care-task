import "./tag.css";

function Tag(props) {
  const { label = "" } = props;

  const className = `tag`;

  return <span className={className}>{label}</span>;
}

export default Tag;
