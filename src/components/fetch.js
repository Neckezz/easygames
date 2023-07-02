import { useEffect,useState } from "react";
import loading from "../images/loading.gif"
const Fetch = () => {

    const[product,setProduct]=useState([]);
    const[Loading,setLoading]=useState(true);
    useEffect(()=>{
      fetch('http://localhost:8000/product')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        console.log(data);
        setProduct(data);
        setLoading(false);
      })
    },[]);
    return (
      <div className="items">

      {Loading &&<div className="loading"><img src={loading} alt="loading..." /></div>}
      {product.map((product) => (
        <div className="item" key={product.id}>
            <img src={product.img} alt={product.title} />
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <button>Purchase</button>
        </div>
      ))}
    </div>
    );
}
export default Fetch;