import React, { useState, useEffect } from 'react';
import "./styles.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionItem from '../AccordionItem';
import { GLOBAL } from '../../Config/global';
import { ERROR } from '../../Config/error';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AccordionPanel = ({ data, photos }) => {
    const [expandTmView, setExpandTmView] = useState(false);
    const [expandSalesReportsView, setExpandSalesReportsView] = useState(false);
    const [expandSalesDayView, setExpandSalesDayView] = useState(false);
    const [fetchData, setFetchData] = useState();

    const fetchingData = data.teammates;
    const fetchingPhotos = photos;

    /*
    setFetchData(
        fetchingData.map((i) => (
            <Row className="itemContainer">
                <Col md={2} className="picContainer ml-4 mt-2">
                    <img src='profilepic.jpg' alt="pic" className="profilePic" />
                </Col>
                <Col md={8} className="tmContainer ml-2">
                    <span>{i.name} {i.last_name}</span>
                    <p>{i.rol}</p>
                </Col>
            </Row>
        ))
    )
    */

    console.log(fetchingData);

    useEffect(() => {
        handleFetch();
    }, []);

    /*
    // Renderizo db.json y mapeo directamente los elementos html en el .map

    const handleFetch = () => {
        if (fetchingPhotos.length === 0) {
            setFetchData(
                <Row className="itemContainer">
                    <Col md={{ offset: 1 }}></Col>
                    <Col md={6} className="mt-2 mb-2">
                        <span>No hay datos</span>
                    </Col>
                    <Col md={{ offset: 1 }}></Col>
                </Row>
            )
        } else {
            setFetchData(
                fetchingPhotos.map((i) => (
                    <Row className="itemContainer">
                        <Col md={2} className="picContainer ml-4 mt-2">
                            <img src={} alt="pic" className="profilePic" />
                        </Col>
                        <Col md={8} className="tmContainer ml-2">
                            <span>{i.name && i.last_name ? i.name + ' ' + i.last_name : ERROR.ACCORDION.ACCORDION_DATA_GET_FAILS}</span>
                            <p>{i.rol ? i.rol : ERROR.ACCORDION.ACCORDION_DATA_GET_FAILS}</p>
                        </Col>
                    </Row>
                ))
            )            
        }
    }
    */

    /*
    // Renderizo photos.json
    const handleFetch = () => {
        if (fetchingPhotos.length === 0){
            setFetchData(
                <p>no hay datos</p>
            )
        } else {
            setFetchData(
                fetchingPhotos.map((i) => (
                    <Row className="itemContainer">
                        <Col md={2} className="picContainer ml-4 mt-2 mb-2">
                            <img src={i.url ? i.url : "error"} alt={ i.id ? i.id : "error"} className="profilePic" />
                        </Col>
                        <Col md={8}>
                            <span>{i.title ? i.title : "error"}</span>
                        </Col>
                    </Row>
                ))
            )            
        }
    }
    */

    // Renderizo db.json y mapeo el componente AccordionItem

    const handleFetch = () => {
        if (fetchingData.length === 0) {
            setFetchData(
                <Row className="itemContainer">
                    <Col md={{ offset: 1 }}></Col>
                    <Col md={6} className="mt-2 mb-2">
                        <span>No hay datos</span>
                    </Col>
                    <Col md={{ offset: 1 }}></Col>
                </Row>
            )
        } else {
            setFetchData(
                fetchingData.map((i) => (
                    <AccordionItem name={i.name} last_name={i.last_name} rol={i.rol} />
                ))
            )
        }
    }

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="cardHeader" onClick={() => {setExpandTmView(!expandTmView);setExpandSalesReportsView(false);setExpandSalesDayView(false)}}>
                    {GLOBAL.ACCORDION.OPTION1}
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandTmView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-0">
                        <div>
                            {fetchData}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="cardHeader" onClick={() => {setExpandSalesReportsView(!expandSalesReportsView);setExpandTmView(false);setExpandSalesDayView(false)}}>
                    {GLOBAL.ACCORDION.OPTION2}
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandSalesReportsView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>{GLOBAL.ACCORDION.DEFAULT}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="cardHeader" onClick={() => {setExpandSalesDayView(!expandSalesDayView);setExpandTmView(false);setExpandSalesReportsView(false)}}>
                    {GLOBAL.ACCORDION.OPTION3}
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandSalesDayView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>{GLOBAL.ACCORDION.DEFAULT}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AccordionPanel;