import { useEffect, useState } from "react";

const Fetch = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  return (
    <div>
      {product ? (
        <div className="item">
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fetch;