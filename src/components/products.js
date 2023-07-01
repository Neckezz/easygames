import Categories from "./categories";
import Fetch from "./fetch"
const Products = () => {
    return (
        <div className="products">
            <div className="text">
            <h1>Shop right now</h1>
            <h3>Experience gaming adventures for the lowest price in Serbia</h3>
            <Categories/>
            </div>
                <Fetch/>
        </div>
     );
}
 
export default Products;