import Styled from 'styled-components';

const PopularDishesStc=Styled.section`
    hr 
    {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    .title-section {
        text-align: center;
        margin-bottom: 40px;
        position: relative;
        margin: 100px 0px;

        h2, .heading2 {
            color: #23292c;
            font-size: 50px;
            font-weight: 600;
            margin: 0 0 10px;
            line-height: 56px;
        }
        
    }
    .popular-menu-post {
        margin: 0 15px;
        padding: 15px 30px 40px;
        background: #fafafa;
        text-align: center;
        h3, .heading3 {
            color: #23292c;
            font-size: 22px;
            font-weight: 600;
            margin: 0 0 10px;
            line-height: 28px;
        }
        p, .paragraph, .other-posts__desc {
            font-size: 16px;
            color: #777777;
            font-weight: 400;
            line-height: 26px;
            margin: 0 0 10px;
        }
        span
        {
            color: #ea462b;
            display: block;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        a.button-one {
            color: #23292c;
            font-size: 18px;
            padding: 10px 35px;
            border: 1px solid #ea462b;
            font-weight: 600;
            transition: all 0.2s ease-in-out;
            -moz-transition: all 0.2s ease-in-out;
            -webkit-transition: all 0.2s ease-in-out;
            -o-transition: all 0.2s ease-in-out;
            margin: 0;
        }
        img{
            width:100% !important
        }
    }
`;
export default PopularDishesStc;