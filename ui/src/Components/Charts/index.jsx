import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChartComponent from '../../Components/PieChartComponent';
import BarChartComponent from '../../Components/BarChartComponent';
import Percentage from '../../Components/Percentage';

const Charts = ({ pieChartData, barChartData1, barChartData2, colors, pieChartConfig , barChartConfig }) => {
    return (
        <Row className="charts">

            <Col md={3} className="chart-1">
                <PieChartComponent
                    pieChartData={pieChartData}
                    pieChartConfig={pieChartConfig}
                    /* colors={colors} */
                />
            </Col>

            
            <Col md={2} className="chart-2">
                <Percentage />
            </Col>
        

            <Col md={6} className="chart-3" >
                <BarChartComponent  
                    barChartData1={barChartData1}
                    barChartData2={barChartData2}
                    barChartConfig={barChartConfig}
                />
            </Col>
        </Row>
    )
}

export default Charts;