import { useState } from "react";
import "./Counter.css";
import Product from "./product/Product";

const Counter = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      count: 0,
      imgPath:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      count: 0,
      imgPath:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      count: 0,
      imgPath:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  const handleIncrement = (id) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((product) => product.id === id);
    const product = { ...newProducts[index] };
    product.count = product.count + 1;
    newProducts[index] = product;

    setProducts(newProducts);
  };
  const handleDecrement = (id) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((product) => product.id === id);
    const product = { ...newProducts[index] };
    if (product.count) {
      product.count = product.count - 1;
      newProducts[index] = product;

      setProducts(newProducts);
    }
  };
  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);

    setProducts(newProducts);
  };

  const getTotal = () => {
    return products.reduce((sum, product) => sum + product.count, 0);
  };

  return (
    <section>
      <div className="total-counter">Total {getTotal()}</div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
    </section>
  );
};

export default Counter;
