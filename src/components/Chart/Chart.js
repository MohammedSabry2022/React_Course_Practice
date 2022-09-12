import React from "react";
import "./Chart.css";
import "./ChartBar";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={100}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
