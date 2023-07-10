import Header from "../components/header";
import NewArticles from "../components/newarticles";
import Products from "../components/products";
import Footer from "../components/footer";
import Refundpolicy from "../components/refundpolicy";
const Homepage = () => {
    return ( 
        <div className="homepage">
            <Header/>
            <NewArticles/>
            <Products/>
            <Refundpolicy/>
            <Footer/>
        </div>
     );
}
 
export default Homepage;