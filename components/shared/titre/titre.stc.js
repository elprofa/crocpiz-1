import Styled from 'styled-components';

const TitreStc=Styled.h1`
    font-size: ${(props)=>props.fontTaille || "50px"} !important;
    color: ${(props)=>props.couleur || "#ffffff"} !important;
    margin-bottom: ${(props)=>props.margeBas || " 0px" } !important;
    font-weight:${(props)=>props.fontPoid || " 600" } !important; 600;
    margin:${(props)=>props.marge || " 0 0 10px" } !important;
    line-height: ${(props)=>props.ligneHauteur || " 56px" } !important;
`;
export default TitreStc;