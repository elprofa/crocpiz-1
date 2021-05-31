import Styled from 'styled-components';

const TexteStc=Styled.span`

    font-size: ${(props)=>props.fontTaille || "14px"} !important;
    color: ${(props)=>props.couleur || "#777777"} !important;
    margin-bottom: ${(props)=>props.margeBas || " 0px" } !important;
    font-weight:${(props)=>props.fontPoid || " 400" } !important; 600;
    margin:${(props)=>props.marge || " 0 0 10px" } !important;
    line-height: ${(props)=>props.ligneHauteur || " 28px" } !important;
`;
export default TexteStc;