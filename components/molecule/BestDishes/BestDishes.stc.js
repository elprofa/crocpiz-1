import Styled from 'styled-components';

const BestDishesStc=Styled.section`
    padding: 130px 0;
    background: #111 url('/img/1.jpg') center center no-repeat;
    background-size: cover;

    h3 {
        font-weight: 400;
        color: #aaaaaa;
        font-size: 22px;
        font-weight: 600;
        margin: 0 0 10px;
        line-height: 28px;
    }
    h2 {
        color: #ffffff;
        font-size: 50px;
        font-weight: 600;
        margin: 0 0 10px;
        line-height: 56px;
    }
     span {
        display: block;
        color: #ea462b;
        font-size: 70px;
        font-weight: 600;
        margin-bottom: 35px;
        line-height: 60px;
    }
    a.button-two {
        color: #ffffff;
        font-size: 18px;
        padding: 10px 35px;
        background: #ea462b;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        margin: 0;
    }
`;

export default BestDishesStc;