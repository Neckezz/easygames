import { useEffect, useState } from "react";
import loading from "../images/loading.gif";

const FetchID = ({ productId }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

   const increment = () => {
    let element = document.getElementById("value");
    let currentValue = parseInt(element.innerHTML);
    currentValue++;
    element.innerHTML = currentValue.toString();
  };
  
  const decrement = () => {
      let element = document.getElementById("value");
      let currentValue = parseInt(element.innerHTML);
      if (currentValue > 1) {
      currentValue--;
      element.innerHTML = currentValue.toString();
      }
  };

  return (
    <div>
      {loading && <div className="loading"><img src={loading} alt="loading..." /></div>}
      {product && (
        <div className="product" key={product.id}>
          <h1>{product.title}</h1>
          <div className="flex">
          <img src={product.img} alt={product.id} />

          <div className="right">
            <p id="description">{product.description}</p>
            <h3>{product.price}</h3>
              <button onClick={increment}>+</button>
              <button id="value">1</button>
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
