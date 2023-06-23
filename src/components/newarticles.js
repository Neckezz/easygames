import baner1 from '../images/baner1.png';
import baner2 from '../images/baner2.png';
import racunari from '../images/racunar.png';
const NewArticles = () => {
    return ( 
        <div className="news">
            <a href=""><img id="pc" src={racunari} alt="racunari" /></a>
            <div className="banner">
            <a href=""><img src={baner1} alt="baner1" /></a>
            <a href=""><img src={baner2} alt="baner2" /></a>
            </div>
        </div>
     );
}
 
export default NewArticles;