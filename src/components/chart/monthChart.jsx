import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import "./style.less";

const VisitChart = (props) => {
  const init = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
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
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    series: [],
    colors: ["#d92021", "#f05b4f", "#f4c63d"],
  };

  const { title, type, dataSource, className } = props;
  const [data, setData] = useState(init);

  useEffect(
    (item) => {
      if (dataSource) {
        init.series = dataSource;
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
    height: "420",
    high: highs(data.series), // 数字类型，最大值
    low: 0, // 数字类型，最小值
    showLine: true, // 布尔类型: 是否显示线条
    showPoint: true, // 布尔类型，是否显示点
    showArea: false, // 布尔类型，是否显示区域
    areaBase: false,
    chartPadding: 25,
    fullWidth: true,

    lineSmooth: false, // 线性是否光滑
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
                <span style={{ background: data.colors[index] }}></span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default VisitChart;
