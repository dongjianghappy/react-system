import React from "react";
import ChartistGraph from "react-chartist";
import "./style.less";

const PieChart = (props) => {
  const { type, dataSource, className, height } = props;
  const data = {
    labels: ["百度", "谷歌", "360"],
    series: [200, 15, 40],
  };

  const options = {
    width: "100%",
    height: height || 250,
    high: Math.max(...data.series),
    low: 1,
    lineSmooth: false, // 线性是否光滑
  };

  return (
    <div className="graph">
      <ChartistGraph
        data={data}
        options={options}
        type="Pie"
        className={className}
      />
    </div>
  );
};
export default PieChart;
