import PageBanListStc from './PageBanList.stc';

const PageBanList=(props)=>{

    const  filAriannes=props.filAriannes
    return (
        <PageBanListStc>
            <ul className="page-ban-list">
                {
                    filAriannes.map((filArianne,index)=><li key={index}>{filArianne.contenu}</li>)
                }
                
            </ul>
        </PageBanListStc>
    )
}
export default PageBanList;