import React from 'react';
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GLOBAL } from '../../Config/global';

const Percentage = () => {
    
    return (
        <Row className="text-center">
          <Col md={12}>
            <span className="customer-satisfaction" >95%</span>
            <p className="caption-percentage">{GLOBAL.PERCENTAGE.CUSTOMER_SATISFACTION}</p>
          </Col>
          <Col md={12} className="mt-5">
            <span className="target-sales" >95%</span>
            <p className="caption-percentage">{GLOBAL.PERCENTAGE.TARGET_SALES}</p>
          </Col>
        </Row>
    )
}

export default Percentage;