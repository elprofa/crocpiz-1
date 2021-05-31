import Styled from 'styled-components'

const ContactSectionStc=Styled.section`
    padding: 100px 0;
    display: block;
    box-sizing: border-box;
   label {
        display: block;
        color: #23292c;
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 12px;
    }
    #contact-form input[type="text"], 
    #contact-form textarea, 
    #reservation-form input[type="text"], 
    #reservation-form textarea
    {
        width: 100%;
        padding: 10px 20px;
        background: transparent;
        color: #777777;
        font-size: 16px;
        font-weight: 400;
        outline: none;
        border: 1px solid #e1e1e1;
        margin: 0 0 20px;
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        -ms-border-radius: 0px;
        border-radius: 0px;
        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
    }

    #contact-form input[type="submit"], #reservation-form input[type="submit"] {
    padding: 10px 30px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    background: #ea462b;
    border: 1px solid #ea462b;
    outline: none;
    margin: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
}

    .open-info .info-line p {
        color: #23292c;
        line-height: 28px;
    }
    p, .paragraph, .other-posts__desc {
        font-size: 16px;
        color: #777777;
        font-family: "Lato", sans-serif;
        font-weight: 400;
        line-height: 26px;
        margin: 0 0 10px;
    }
     .open-info .info-line p span {
        font-weight: 700;
    }
`;
export default ContactSectionStc;