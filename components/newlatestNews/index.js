import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Row, Col, Container, CardFooter, Button } from 'reactstrap';
import NewsLatesteStc from './newlatesteNews.stc';

const CardNewlatest = (props) => {
  return (
 <NewsLatesteStc>
   
   <div className="container">
				<div className="title-section white-style">
					<h2>Latest News</h2>
					<span>Promotion in a Cafe</span>
				</div>
				<div className="news-box">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="news-post">
								<img src="/img/31.jpg" alt="" />
								<div className="news-content">
									<h3><a href="single-post.html">Etiam sodales, erat non.</a></h3>
									<p>Donec nec justo eget felis facilisis 
										fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim 
										pellente squefelis.</p>
									<p className="auth-paragraph">
										24.04.2020 / <a href="single-post.html">2 comments</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="news-post">
								<img src="/img/32.jpg" alt="" />
								<div className="news-content">
									<h3><a href="single-post.html">Quisque volutpat mattis.</a></h3>
									<p>Donec nec justo eget felis facilisis 
										fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim 
										pellente squefelis.</p>
									<p className="auth-paragraph">
										24.04.2020 / <a href="single-post.html">2 comments</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="news-post">
								<img src="/img/33.jpg" alt="" />
								<div className="news-content">
									<h3><a href="single-post.html">Cras iaculis ultricies nulla.</a></h3>
									<p>Donec nec justo eget felis facilisis 
										fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim 
										pellente squefelis.</p>
									<p className="auth-paragraph">
										24.04.2020 / <a href="single-post.html">2 comments</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="center-button">
						<a href="blog.html" className="button-one">View All News</a>
					</div>
				</div>
			</div>
      </NewsLatesteStc>
      );
    };
      
      export default CardNewlatest;