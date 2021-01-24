import React from "react";
import { Pagination } from "antd";

const WePagination = (props) => {
  const { module, renderList, dispatch } = props;

  const onChange = (pageNumber, page) => {
    renderList &&
      renderList({
        page: pageNumber,
        pagesize: page,
      });
    // dispatch.select({
    //   api: props.api,
    //   data: {
    //     page: pageNumber,
    //     pagesize: page,
    //     ...props.data,
    //   },
    // });
  };

  debugger;
  return (
    <Pagination
      showQuickJumper
      pagesize={15}
      total={module.total}
      onChange={onChange}
      locale={{ jump_to: "跳至" }}
      style={{ marginTop: 25 }}
    />
  );
};

export default WePagination;
