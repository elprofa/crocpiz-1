import styled from "styled-components";

 const NewsLatesteStc = styled.section`

    padding: 100px 0;
    background: #111 url("/img/ban7.jpg") center center no-repeat;
    background-size: cover;

    .news-box .news-post img {
        width: 100%;
        height: auto;
    }

    .news-box .news-post .news-content {
        padding: 35px 40px;
        text-align: center;
    }

    h3, .heading3 {
        color: #23292c;
        font-size: 22px;
        font-weight: 600;
        margin: 0 0 10px;
        line-height: 28px;
    }

    .news-content h3 a {
        color: #23292c;
    }
    .news-box .news-post {
        background: #ffffff;
        margin-bottom: 30px;
    }

    .news-content p.auth-paragraph a {
        color: #777777;
    }
    .news-box .center-button {
        padding-top: 20px;
        text-align: center;
    }
    .news-box .center-button a {
        color: #ffffff;
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
    .news-content p.auth-paragraph {
    padding-top: 25px;
    margin: 30px 15px 0;
    border-top: 1px solid #e1e1e1;
}

    p, .paragraph, .other-posts__desc {
        font-size: 16px;
        color: #777777;
        font-weight: 400;
        line-height: 26px;
        margin: 0 0 10px;
    }

.title-section {
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    span {
        color: #777777;
        font-size: 18px;
        font-family: "Zilla Slab", serif;
        font-weight: 400;
        margin: 0 0 10px;
        line-height: 28px;
    }
}

.title-section.white-style h2 {
    color: #ffffff;
}

h2, .heading2 {
    font-size: 50px;
    font-weight: 600;
    margin: 0 0 10px;
    line-height: 56px;
}
.news-box .center-button {
    padding-top: 20px;
}
 `;

export default NewsLatesteStc;