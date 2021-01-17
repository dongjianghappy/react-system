import React from "react";
import { WeCheckbox, Quick, NavGroup, WeDrawer } from "@/components";
const List = (props) => {
  const { dataSource } = props;
  debugger;
  return (
    <>
      <table
        width="100%"
        className="table-striped table-hover artlist artlist col-left-4"
      >
        <tr class="th">
          <td className="col-md-1">选择</td>
          <td className="col-md-1">顺序</td>
          <td className="col-md-3">标签名称</td>
          <td className="col-md-3">标签值</td>
          <td className="col-md-1">tag</td>
          <td className="col-md-1">icon标签</td>
          <td className="col-md-2"></td>
        </tr>
        {dataSource &&
          dataSource.map((item, index) => (
            <tr class="tr-list">
              <td>
                <WeCheckbox data={{ id: item.id }} {...props}></WeCheckbox>
              </td>
              <td>
                <Quick
                  id={item.id}
                  title={item.sort}
                  field="sort"
                  coding="O0002"
                  changeData={props.changeData}
                />
              </td>
              <td>{item.remark}</td>
              <td>
                <Quick
                  id={item.id}
                  title={item.value}
                  field="value"
                  coding="O0002"
                  changeData={props.changeData}
                />
              </td>
              <td>
                <Quick
                  id={item.id}
                  title={item.tag}
                  field="tag"
                  coding="O0002"
                  changeData={props.changeData}
                />
              </td>
              <td>
                <Quick
                  id={item.id}
                  title={item.tag}
                  field="tag"
                  coding="O0002"
                  changeData={props.changeData}
                />
              </td>
              <td>
                <Quick
                  id={item.id}
                  title={item.color}
                  field="color"
                  width="50%"
                  coding="O0002"
                  changeData={props.changeData}
                />
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
