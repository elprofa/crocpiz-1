import Texte from '../../shared/Texte';
import Titre from '../../shared/titre';
import PageBannerSectionStc from './PageBannerSection.stc';


const PageBannerSection=(props)=>{

    return(
        <PageBannerSectionStc>
            <div className="container">
                <Titre texte={props.titre} />
                <Texte texte={props.sousTitre} fontTaille="22px" couleur='#999999' />
			</div>
        </PageBannerSectionStc>
    )
}

export default PageBannerSection;