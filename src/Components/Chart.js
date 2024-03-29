import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalmaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalmaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
