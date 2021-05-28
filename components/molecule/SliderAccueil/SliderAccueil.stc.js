import Styled from 'styled-components';

const SliderAccueilStc=Styled.section`

    overflow: hidden;
    background: #111111;



    .slider {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;

	& a {
		&.previousButton, &.nextButton {
			font-size: 22px;
			line-height: 0;
			display: block;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			transition: all .3s linear;
			z-index: 1;
			padding: 10px;
			text-decoration: none;
			backface-visibility: hidden; /* prevent jump effect when scaling */

			&:not(.disabled):hover {
				transform: translateY(-50%) scale(1.25);
				cursor: pointer;
			}

			& svg {
				& polygon {
					fill: #ffd800;
				}
			}
		}

		&.previousButton {
			left: 20px;
		}

		&.nextButton {
			right: 20px;
		}
	}
}

.sliderContent {
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	text-align: center;
	background-size: cover !important;
	
	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
		bottom: 0;
		left: 0;
	}

	&.hidden {
		visibility: hidden;
	}

	&.previous {
		left: -100%;
	}

	&.current {
		left: 0;
	}

	&.next {
		left: 100%;
	}

	&.animateIn,
	&.animateOut {
		transition: all 2s ease;
	}

	&.animateIn {
		&.previous,
		&.next {
			left: 0;
			visibility: visible;

			& p {
				transition-delay: 1.1s;
			}

			& button {
				transition-delay: 1.3s;
			}
			
			& section img {
				transition-delay: 1.3s;
			}

			& section span {
				transition-delay: 1.4s;
			}

			& section span strong {
				transition-delay: 1.5s;
			}
		}
	}

	&.animateOut {
		&.previous {
			left: 100%;
		}

		&.next {
			left: -100%;
		}

		& h1 {
			transition-delay: .3s;
		}

		& p {
			transition-delay: .2s;
		}

		& section span {
			transition-delay: .1s;
		}

		& section span strong {
			transition-delay: 0s;
		}
	}

	&.current,
	&.animateIn {
		& h1, 
		& button,
		& p,
		& section * {
			transform: translateX(0);
			transition-delay: .9s;
			opacity: 1;
		}
	}

	& .inner {
		padding: 0px;
		box-sizing: border-box;
		position: absolute;
		width: 100%;
		top: 40%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
        text-align:left;
	}

	& h1 {
		font-weight: 900;
        width: 50%;
        margin: 0;
        color: #000 ;
		/* margin: 0 auto; */
		max-width: 840px;
		/* color: #FFFFFF; */
        font-size: 80px;
        font-weight: 700;
		line-height: 1;
		transition: all .3s ease;
		transform: translateY(-20px);
		opacity: 0;
        
	}

	& p {
		line-height: 1.5;
		max-width: 640px;
        width: 50%;
        margin:20px 0px;
		transition: all .3s ease;
		transform: translateY(20px);
		opacity: 0;
        font-family: "Zilla Slab", serif;
        font-size: 26px;
        font-style: normal !important;
        font-weight: 400 !important;
        text-align: center;
        color: #e0e0e0;
        text-align:left;
	}

	& button {
		transform: translateY(20px);
		opacity: 0;
        border: 0px;
        color: #ffffff;
        font-size: 18px;
        padding: 10px 35px;
        background: #ea462b;
        font-weight: 600;
        margin: 0;
	}

    & button:hover
    {
        transition: 0.4s;
        background: #fff;
        color: #ea462b;
    }

	& section {
		position: absolute;
		bottom: 20px;
		left: 20px;

		& * {
			transition: all .3s ease;
		}

		& span {
			color: rgba(255, 255, 255, 0.5);
			font-size: 12px;
			display: inline-block;
			text-align: left;
			line-height: 1.4;
			vertical-align: middle;
			margin-left: 10px;
			transform: translateX(-10px);
			opacity: 0;

			& strong {
				color: #FFFFFF;
				font-size: 14px;
				display: block;
				transform: translateY(10px);
				opacity: 0;
			}
		}

		& img {
			width: 40px;
			height: 40px;
			border: solid 2px rgba(255, 255, 255, 0.5);
			border-radius: 100%;
			vertical-align: middle;
			transition: all .5s ease;
			transform: translateX(-20px);
			opacity: 0;
		}
	}
}
`;
export default SliderAccueilStc;