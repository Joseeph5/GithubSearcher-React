// STEP 1 - Include Dependencies
// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: 'pie2d', // The chart type
  width: '400', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
    chart: {
      caption: 'Split of Visitors by Age Group',
      subCaption: 'Last year',
      use3DLighting: '0',
      showPercentValues: '1',
      decimals: '1',
      useDataPlotColorForLabels: '1',
      theme: 'fusion',
    },
    data: [],
  },
};

// STEP 4 - Creating the component to pass the react-fusioncharts component
const PieChart = () => {
  return <ReactFC {...chartConfigs} />;
};

export default PieChart;
