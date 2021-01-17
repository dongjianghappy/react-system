import React from "react";

const List = (props) => {
  const { dataSource } = props;

  return (
    <>
      <table width="100%" class="table-striped table-hover col-left-2">
        <tr class="th">
          <td class="col-md-1">序号</td>
          <td class="col-md-5">搜索词</td>
          <td class="col-md-1">搜索次数</td>
          <td class="col-md-1">百度</td>
          <td class="col-md-1">谷歌</td>
          <td class="col-md-1">必应</td>
          <td class="col-md-1">360搜索</td>
          <td class="col-md-1">搜狗</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
};

export default List;
