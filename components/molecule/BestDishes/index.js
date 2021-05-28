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
						$19.99
					</span>
					<a href="menu.html" className="button-two">Add To Cart</a>
				</div>
			</div>
		</BestDishesStc>
    )
}
export default BestDishes;