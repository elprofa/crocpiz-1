import Styled from 'styled-components';

const NavBarStc=Styled.header`
    padding: 0;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    z-index: 999999;
    nav 
    {
        padding: 0;
        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        border-bottom: none;
        width: 100%;
        z-index: 999999;
        background: #ffffff !important;
        border-bottom: none;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 1rem;
        @media (min-width: 768px)
        {
            .navbar-expand-md {
                flex-flow: row nowrap;
                justify-content: flex-start;
            }
        }

        .navbar-brand {
            display: inline-block;
            padding-top: .3125rem;
            padding-bottom: .3125rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            line-height: inherit;
            white-space: nowrap;
        }
    }

    .navbar-nav > li > a.active, .navbar-nav > li > a:hover {
        color: #ea462b !important;
    }
    .navbar-nav > li > a {
        color: #23292c !important;
        font-size: 18px;
        font-weight: 400 !important;
        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        padding: 26px 15px 26px !important;
        margin: 0 7px -1px;
        position: relative;
    }
    a, .anchor {
        display: inline-block;
        text-decoration: none !important;
        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
    }

    .navbar-text a {
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

        &:hover
        {
            transition: :.7s;
            background:#ea462b;
            color: #fff;
        }
    }
`;

export default NavBarStc;