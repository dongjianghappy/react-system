import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import "./style.less";

const VisitChart = (props) => {
  const init = {
    labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    series: [],
  };
  const { title, label, dataSource, className, height } = props;
  const [data, setData] = useState(init);

  useEffect(
    (item) => {
      if (dataSource) {
        init.series = dataSource;
        init.labels = label;
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
    height: height || 173,
    high: highs(data.series),
    low: 0,
    lineSmooth: false,
    chartPadding: 0,
  };

  return (
    <div className="graph">
      <ChartistGraph
        data={data}
        options={options}
        type="Line"
        className={className}
      />
      {title && (
        <div className="graph-bar">
          <div className="bar-title">
            {title.map((item, index) => (
              <div>
                {item}
                {title.length > 1 && (
                  <span style={{ background: "#f00" }}></span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default VisitChart;
