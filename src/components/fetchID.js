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

  /* const increment = () => {
  };
  
  const decrement = () => {
    if (count > 1) {
    }
  }; */

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
              <button>+</button>
              <button>1</button>
              <button>-</button>
              <button id="cart">Add to cart</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchID;
