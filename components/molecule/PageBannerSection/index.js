import Texte from '../../shared/Texte';
import Titre from '../../shared/titre';
import PageBannerSectionStc from './PageBannerSection.stc';


const PageBannerSection=()=>{

    return(
        <PageBannerSectionStc>
            <div className="container">
                <Titre texte="Our Menu" />
                <Texte texte="good food fresh ingredients" fontTaille="22px" couleur='#999999' />
			</div>
        </PageBannerSectionStc>
    )
}

export default PageBannerSection;