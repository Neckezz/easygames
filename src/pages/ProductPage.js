import { useParams } from "react-router-dom";
import FetchID from "../components/fetchID";
const ProductPage = () => {
    const { id } = useParams();
  
    return (
      <div>
        <FetchID productId={id} />
      </div>
    );
  };
  
  export default ProductPage;