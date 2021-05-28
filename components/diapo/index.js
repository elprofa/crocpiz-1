import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DiapoStc from './diapo.stc';


const Diapo = (props) => {
  return (
    <DiapoStc>
        <a href="/img/21.jpg" className="zoom">
          <img src="/img/21.jpg" alt="" />
        </a>
        <a href="/img/22.jpg" className="zoom">
          <img src="/img/22.jpg" alt="" />
        </a>
        <a href="/img/23.jpg" className="zoom">
          <img src="/img/23.jpg" alt="" />
        </a>
        <a href="/img/24.jpg" className="zoom">
          <img src="/img/24.jpg" alt="" />
        </a>
    </DiapoStc>
      );
    };
      
      export default Diapo;