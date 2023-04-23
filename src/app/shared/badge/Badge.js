import "./Badge.css";

const Badge = ({ count }) => {
  return <div className="badge">{count || "zero"}</div>;
};

export default Badge;
