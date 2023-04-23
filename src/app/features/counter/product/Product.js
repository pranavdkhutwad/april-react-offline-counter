import Badge from "../../../shared/badge/Badge";
import Image from "../../../shared/image/Image";
import Button from "../../../shared/button/Button";
import PropTypes from "prop-types";

import "./Product.css";

const Product = ({ product, onIncrement, onDecrement, onDelete }) => {
  const { count, imgPath, id } = product;
  return (
    <div className="product">
      <Badge count={count} />
      <Image imgPath={imgPath} />
      <Button
        onClickHandler={() => onDecrement(id)}
        title="-"
        cls="btn-danger"
      />
      <Button
        onClickHandler={() => onIncrement(id)}
        title="+"
        cls="btn-success"
      />
      <Button
        onClickHandler={() => onDelete(id)}
        title="delete"
        cls="btn-danger"
      />
    </div>
  );
};

Product.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  product: PropTypes.shape({
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    imgPath: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
