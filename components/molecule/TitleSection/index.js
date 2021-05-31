import Texte from '../../shared/Texte';
import Titre from '../../shared/titre';
import TitleSectionStc from './TitleSection.stc';

const TitleSection=(props)=>{
    return (
        <TitleSectionStc>
            <Titre texte={props.titre} 
            couleur="#23292c" 
            fontTaille="50px"
            fontPoid="600" 
            marge=" 0 0 10px" 
            ligneHauteur="56px" />
            <Texte 
            texte={props.sousTitre}
            couleur="#777777" 
            fontTaille="18px"
            fontPoid="400" 
            marge=" 0 0 10px" 
            ligneHauteur="28px"
             />
        </TitleSectionStc>
    )
}
export default TitleSection;