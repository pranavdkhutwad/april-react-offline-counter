import "./Image.css";

const Image = ({ imgPath }) => {
  return <img className="product-img" src={imgPath} alt="" />;
};

export default Image;
