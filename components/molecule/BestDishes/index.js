import Bouton from '../../shared/bouton';
import BestDishesStc from './BestDishes.stc'

const BestDishes=()=>{
    return(
        <BestDishesStc className="banner-section">
			<div className="container">
				<div className="banner-box">
					<h3>Best Dish Of The Day</h3>
					<h2>Hamburger & <br/>
						Sweet Potato Fries</h2>
					<span className="price">
						dh 19.99
					</span>
					<Bouton texte="call us now" />
				</div>
			</div>
		</BestDishesStc>
    )
}
export default BestDishes;