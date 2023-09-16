import { useEffect, useState } from "react";
import loading from "../images/loading.gif";

const FetchID = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [value, setValue] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setLoadingProduct(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div>
      {loadingProduct && (
        <div className="loading">
          <img src={loading} alt="loading..." />
        </div>
      )}
      {product && (
        <div className="product" key={product.id}>
          <h1>{product.title}</h1>
          <div className="flex">
            <img src={product.img} alt={product.id} />

            <div className="right">
              <p id="description">{product.description}</p>
              <h3 id="price">{product.price * value}$</h3>
              <button onClick={increment}>+</button>
              <button>{value}</button>
              <button onClick={decrement}>-</button>
              <button id="cart">Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchID;
