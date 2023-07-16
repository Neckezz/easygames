import { useParams } from "react-router-dom";
import FetchID from "../components/fetchID";
const ProductPage = () => {
    const { id } = useParams();
  
    return (
        <FetchID productId={id} />
    );
  };
  
  export default ProductPage;