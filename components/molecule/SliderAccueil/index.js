import React from 'react';
import Slider from './Slider';
import content from './Content';
import SliderAccueilStc from './SliderAccueil.stc'
function Autoplay() {
	return (
		<SliderAccueilStc>
			<Slider classNames="" autoplay={3000}>
				{content.map((item, index) => (
					<div
						key={index}
						className="sliderContent "
						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="container inner">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button>{item.button}</button>
						</div>
						<section>
							<img src={item.userProfile} alt={item.user} />
							<span>
								Posted by <strong>{item.user}</strong>
							</span>
						</section>
					</div>
				))}
			</Slider>
		</SliderAccueilStc>
	);
}

export default Autoplay;