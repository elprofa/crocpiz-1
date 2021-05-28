import Styled from 'styled-components';

const ServiceStc=Styled.section`
    display: block;
    margin:80px 0px;
     .services-post {
        text-align: center;
        padding: 0 20px;
        margin-bottom: 30px;

        img
        {
            vertical-align: middle;
            border-style: none;
            margin-top: 20px;
            margin-bottom: 20px;
        }

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
    }
`;
export default ServiceStc;