import styled from "styled-components";

const DiapoStc = styled.section`
    display: flex;
    a.zoom {
        outline: none;
    }
    a, .anchor {
        display: inline-block;
        text-decoration: none !important;
        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`;

export default DiapoStc;