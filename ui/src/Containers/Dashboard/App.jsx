import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '../../Components/Grid';
import Charts from '../../Components/Charts';
import AccordionPanel from '../../Components/AccordionPanel';
import Header from '../../Components/Header';
import data from '../../db/db.json'; 
import photos from '../../db/photos.json';

const App = () => {

    const pieChartData = [
        { name: 'Group A', value: 17, fill: '#0d47a1' },
        { name: 'Group B', value: 23, fill: '#4285F4' },
        { name: 'Group C', value: 11, fill: '#00C851' },
        { name: 'Group D', value: 5, fill: '#ffbb33' },
        { name: 'Group E', value: 22, fill: '#ff4444' },
        { name: 'Group F', value: 19, fill: '#e91e63' },
    ];

    const barChartData_1 = [
        {
          name: 'Page A', pv: 4, fill: '#0d47a1',
        },
        {
          name: 'Page B', pv: 5, fill: '#4285F4',
        },
        {
          name: 'Page C', pv: 3, fill: '#00C851',
        },
        {
          name: 'Page D', pv: 1, fill: '#ffbb33',
        },
        {
          name: 'Page E', pv: 4, fill: '#ff4444',
        },
        {
          name: 'Page F', pv: 2, fill: '#e91e63',
        },
    ];
      
    const barChartData_2 = [
        {
          name: 'Page A', pv: 8, fill: '#0d47a1',
        },
        {
          name: 'Page B', pv: 7, fill: '#4285F4',
        },
        {
          name: 'Page C', pv: 5, fill: '#00C851',
        },
        {
          name: 'Page D', pv: 3, fill: '#ffbb33',
        },
        {
          name: 'Page E', pv: 2, fill: '#ff4444',
        },
        {
          name: 'Page F', pv: 1, fill: '#e91e63',
        },
    ];

    // const colors = ['#0d47a1', '#4285F4', '#00C851', '#ffbb33', '#ff4444', '#e91e63'];

    const pieChartConfig = {
        pieChartWidth: 400,
        pieChartHeight: 200,
        pieChartMargin: {top: 0, right: 150, left: 0, bottom: 0},
        pieChartInnerRadius: 40,
        pieChartOuterRadius: 100,
        pieChartLabelLine: false,
        pieChartFill: '8884d8'
    }

    const barChartConfig = {
        barChartWidth: 300,
        barChartHeight: 250,
        barChartMargin: {top: 0, right: 0, left: 47, bottom: 0}
    }

    // const PieConfig = { 
    //     PieChartWidth : 400,
    //     PieChartHeight : 200,
    //     PieChartMargin : {top: 0, right: 150, left: 0, bottom: 0,},
    //     PieChartInnerRadius : 40,
    //     PieChartOuterRadius : 100,
    //     PieChartLabelLine : false,
    //     PieChartFill : '8884d8'
    // }

    return (
        <Container fluid={true}>
            <Header />
            <Row>
                <Col md={3} className="panel" >
                    <AccordionPanel data={data} photos={photos} />
                </Col>

                <Col md={9}>
                    <Charts
                        pieChartData={pieChartData}
                        barChartData1={barChartData_1}
                        barChartData2={barChartData_2}
                        barChartConfig={barChartConfig}
                        pieChartConfig={pieChartConfig}
                        
                        /* colors={colors} => En caso de que quiera usar un array de colores  */ 
                    />

                    <Row>
                        <Col md={12} className="grid" >
                            <Grid
                                data={data}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default App;