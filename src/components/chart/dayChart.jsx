import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import "./style.less";

const VisitChart = (props) => {
  const init = {
    labels: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ],
    series: [],
    colors: ["#d92021", "#f05b4f", "#f4c63d"],
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
    height: height || 420,
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
        type={type}
        className={className}
      />
      {title && (
        <div className="graph-bar">
          <div className="bar-title">
            {title.map((item, index) => (
              <div>
                {item}
                {title.length > 1 && (
                  <span style={{ background: data.colors[index] }}></span>
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
