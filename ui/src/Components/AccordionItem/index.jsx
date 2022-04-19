import React, { useState } from "react";
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ERROR } from '../../Config/error';

// props:
// teammates = array "dfjsdklfjsdlk"

const AccordionItem = ({ name, last_name, rol }) => {
    return (
   
            <Row className="itemContainer">
                <Col md={2} className="picContainer ml-4 mt-2">
                    <img src='profilepic.jpg' alt="pic" className="profilePic" />
                </Col>
                <Col md={8} className="tmContainer ml-2">
                    <span>{name && last_name ? name + ' ' + last_name : ERROR.ACCORDION.ACCORDION_DATA_GET_FAILS}</span>
                    <p>{rol ? rol : ERROR.ACCORDION.ACCORDION_DATA_GET_FAILS}</p>
                </Col>
            </Row>
   
    )
}

export default AccordionItem;