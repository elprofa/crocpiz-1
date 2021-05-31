import Styled from 'styled-components';

const MenuSectionStc=Styled.section`
    padding: 100px 0 0;
    display: block;
    box-sizing: border-box;
    
    .menu-box div.menu-post {
        padding: 15px 30px 40px;
        background: #fafafa;
        text-align: center;
        margin-bottom: 30px;
    }
    
    .menu-box div.menu-post img {
        width: 100%;
        height: auto;
        min-height: 290px;
        margin-bottom: 30px;
        vertical-align: middle;
        border-style: none;
    }
`;

export default MenuSectionStc;