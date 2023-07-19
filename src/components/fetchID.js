import { useEffect, useState } from "react";
import loading from "../images/loading.gif"

const FetchID = ({ productId }) => {
  const [product, setProduct] = useState([]);/* ${productId} */
  const[Loading,setLoading]=useState(true);

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

  return (
    <div>
      {Loading &&<div className="loading"><img src={loading} alt="loading..." /></div>}
      {product && (
      <div className="product" key={product.id}>
        <h1>{product.title}</h1>
        <img src={product.img} alt={product.id} />

        <div className="right">
        <p id="description">{product.description}</p>

        <div className="quantity">
          <button>+</button>
          <button>1</button>
          <button>-</button>
          <button id="cart">Add to cart</button>

          <p>{product.price}</p> 
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default FetchID;