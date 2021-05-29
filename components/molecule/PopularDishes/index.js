import React from "react";
import "react-multi-carousel/lib/styles.css";
import PopularDishesStc from './PopularDishes.stc';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const PopularDishes = ({ deviceType }) => {
  return (
    <PopularDishesStc>
      <div className="title-section">
					<h2>Popular Dishes</h2>
					<span>Try the delicious new dishes from our chef.</span>
				</div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 2"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="item">
          <div class="popular-menu-post">
            <img src="/img/1_1.jpg" />
            <h3>Classic Havana Burger</h3>
            <p>Grilled beef patty, Turkey rashes, and burger relish.</p>
            <span class="price">dh 21.00</span>
          </div>
          
        </div>
        <div className="item">
          <div class="popular-menu-post">
            <img src="/img/2.jpg" />
            <h3>Classic Havana Burger</h3>
            <p>Grilled beef patty, Turkey rashes, and burger relish.</p>
            <span class="price">dh 21.00</span>
          </div>
        
        </div>

        <div className="item">
          <div class="popular-menu-post">
            <img src="/img/3.jpg" />
            <h3>Classic Havana Burger</h3>
            <p>Grilled beef patty, Turkey rashes, and burger relish.</p>
            <span class="price">dh 21.00</span>
          </div>
          
        </div>
        <div className="item">
          <div class="popular-menu-post">
            <img src="/img/4.jpg" />
            <h3>Classic Havana Burger</h3>
            <p>Grilled beef patty, Turkey rashes, and burger relish.</p>
            <span class="price">dh 21.00</span>
          </div>
          
        </div>
        <div className="item">
          <div class="popular-menu-post">
            <img src="/img/5.jpg" />
            <h3>Classic Havana Burger</h3>
            <p>Grilled beef patty, Turkey rashes, and burger relish.</p>
            <span class="price">dh 21.00</span>
          </div>
        
        </div>
        <div className="item">
          <div class="popular-menu-post">
            <img src="/img/6.jpg" />
            <h3>Classic Havana Burger</h3>
            <p>Grilled beef patty, Turkey rashes, and burger relish.</p>
            <span class="price">dh 21.00</span>
          </div>
        
        </div>
      </Carousel>
      <hr />
    </PopularDishesStc>
  )
};

export default PopularDishes;
