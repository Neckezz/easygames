import NewArticles from "../components/newarticles";
import Products from "../components/products";
import Refundpolicy from "../components/refundpolicy";
const Homepage = () => {
    return ( 
        <div className="homepage">
            <NewArticles/>
            <Products/>
            <Refundpolicy/>
        </div>
     );
}
 
export default Homepage;