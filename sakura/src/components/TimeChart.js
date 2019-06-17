import React from 'react';
import Chart from 'react-google-charts';

const TimeChart = (props) => {
    console.log("props in time", props);
    return(
        <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={props.tweets}
  options={{
    hAxis: {
      title: 'Time Range',
    },
    vAxis: {
      title: 'Risk Score',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    )
};

export default TimeChart;
