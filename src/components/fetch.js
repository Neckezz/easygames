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
      <div>
      {product.map((product) => (
        <div className="preorder" key={product.id}>
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
    );
}
 
export default Fetch;