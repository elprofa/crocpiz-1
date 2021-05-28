import styled from "styled-components";

 const MenuPizzaStc = styled.section`
 background: no-repeat url('../../img/ban3.jpg');
 background-size: cover;
 margin-top: 40px;
 margin-bottom: 40px;

.image-holder img {
    width: 100%;
    height: auto;
}
.menu-holder h2 {
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #e1e1e1;
    margin-top:20px;
}
.menu-box .menu-holder ul.menu-list li {
    display: flex;
    margin-bottom: 25px;
}

ul.menu-list li .img-box {
    max-width: 60px;
    margin-right: 20px;
}
ul.menu-list li .menu-cont {
    width: 100%;
}
ul.menu-list li img {
    max-width: 60px;
    height: auto;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
}

ul.menu-list li .menu-cont h4 span.title-menu {
    padding-right: 10px;
}

ul.menu-list li .menu-cont h4 span {
    background: #fff;
    padding: 3px 0;
    font-size: 18px;
}
ul.menu-list li .menu-cont h4 span.price {
    float: right;
    color: #ea462b;
    padding-left: 10px;
}
ul.menu-list li .menu-cont h4 {
    color: #23292c;
    font-weight: 600;
    margin-bottom: 10px;
    border-bottom: 1px dotted #a6a6a6;
    line-height: 20px;
}

 `;

export default MenuPizzaStc;
