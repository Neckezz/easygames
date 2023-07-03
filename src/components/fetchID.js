import { useEffect, useState } from "react";

const FetchID = ({ productId }) => {
  const [product, setProduct] = useState(null);
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
    <div className="items">
      {Loading &&<div className="loading"><img src={loading} alt="loading..." /></div>}
      {product && (
      <div className="item" key={product.id}>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <img src={product.img} alt="" />
      </div>
    )}
    </div>
  );
};

export default FetchID;