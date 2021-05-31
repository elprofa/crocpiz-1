import Styled from 'styled-components';
import {Container} from 'reactstrap';

const PageBanListStc=Styled(Container)`
    ul.page-ban-list li {
        display: inline-block;
        margin-right: 4px;
    }

    ul.page-ban-list li:before {
        font-size: 14px;
        color: #777777;
        margin-right: 6px;
    }

    ul.page-ban-list {
        padding: 16px 0;
    }
`;
export default PageBanListStc;