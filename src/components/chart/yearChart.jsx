import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import "./style.less";

const WekBarChart = (props) => {
  const init = {
    labels: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7日",
      "8月",
      "9月",
      "10月",
      "11月",
      "12日",
    ],
    series: [],
  };
  const { title, type, dataSource, className, height } = props;
  const [data, setData] = useState(init);

  useEffect(
    (item) => {
      if (dataSource) {
        init.series = dataSource;
        debugger;
        setData({ ...init });
      }
    },
    [dataSource]
  );

  const highs = (data) => {
    let arrHigh = [];
    data &&
      data.map((item) => {
        arrHigh.push(Math.max(...item));
      });
    return 1 + Math.max(...arrHigh);
  };

  const options = {
    width: "100%",
    height: height || 250,
    high: highs(data.series),
    low: 0,
    lineSmooth: false,
    chartPadding: 10,
  };

  return (
    <div className="graph">
      <ChartistGraph
        data={data}
        options={options}
        type={type}
        className={className}
      />
      {title ? (
        <div className="graph-bar">
          <div className="bar-title">{title}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default WekBarChart;
