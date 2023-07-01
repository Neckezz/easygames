import { useEffect,useState } from "react";
const Fetch = () => {

    const[product,setProduct]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:8000/product')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        console.log(data);
        setProduct(data);
      })
    },[]);
    return (
      <div className="items">
      {product.map((product) => (
        <div className="item" key={product.id}>
            <img src={product.img} alt={product.title} />
            <h1>{product.title}</h1>
            <div className="inline">
            <h3>{product.price}</h3>
            <button>Purchase</button>
            </div>
        </div>
      ))}
    </div>
    );
}
export default Fetch;