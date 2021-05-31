import TitreStc from './titre.stc';

const Titre=(props)=>{
    return (
        <TitreStc 
        couleur={props.couleur} 
        fontTaille={props.fontTaille} 
        fontPoid={props.fontPoid} 
        marge={props.marge} 
        lineHauteur={props.ligneHauteur}
        texte="Try the delicious new dishes from our chef."
        >{props.texte}</TitreStc>
    )
}

export default Titre;