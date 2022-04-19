import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonComp from '../../Components/Button';

const Header = () => {
    return (
        <Row className="header">
            <Col md={9} xs={12} className="textContainer mt-2" >
                <p className="headerText">Sales | Name Lastname</p>
            </Col>

            <Col md={3} xs={12} className="buttons" >
                <ButtonComp className="float-right mt-2" description="SHARE" variante="primary"/>
                <ButtonComp className="float-right mr-1 mt-2" description="EXPORT TO PDF" variante="light"/>                                
            </Col>
        </Row>
    )
}

export default Header;