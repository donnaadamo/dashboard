import React from 'react';
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';

const BarChartComponent = ({ barChartData1, barChartData2, barChartConfig }) => {
  return (
    <Row>
      <Col md={6}>
        <BarChart
          width={barChartConfig.barChartWidth}
          height={barChartConfig.barChartHeight}
          data={barChartData1}
          margin={barChartConfig.barChartMargin}
        >
          <CartesianGrid vertical={false} />
          <XAxis hide={true} />
          <YAxis type="number" />
          <Bar dataKey="pv" />
        </BarChart>
      </Col>
      <Col md={6}>
        <BarChart
          width={barChartConfig.barChartWidth}
          height={barChartConfig.barChartHeight}
          data={barChartData2}
          margin={barChartConfig.barChartMargin}
        >
          <CartesianGrid vertical={false} />
          <XAxis hide={true} />
          <Bar dataKey="pv" />
        </BarChart>
      </Col>
    </Row>
  )
}

export default BarChartComponent;