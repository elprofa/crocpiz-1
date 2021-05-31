import TexteStc from './Texte.stc';

const Texte=(props)=>{
    return(
        <TexteStc fontTaille={props.fontTaille} couleur={props.couleur}>{props.texte}</TexteStc>
    )
}
export default Texte;