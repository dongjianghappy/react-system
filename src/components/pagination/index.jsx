import React, { useState, useEffect } from "react";
import { Pagination } from "antd";

const WePagination = (props) => {
  const {
    module,
    common: {
      global: { request, initPage, clear },
    },
    renderList,
    dispatch,
  } = props;

  const onChange = (pageNumber, pagesize) => {
    const newsRequest = { ...request };
    newsRequest.page = pageNumber;
    newsRequest.pagesize = initPage.pagesize;

    dispatch.searchField({
      data: {
        ...newsRequest,
      },
      node: "request",
    });

    renderList && renderList(newsRequest);
  };

  return (
    <>
      <Pagination
        showQuickJumper
        current={request.page}
        defaultPageSize={request.pagesize}
        total={module.total}
        onChange={onChange}
        locale={{ jump_to: "跳至" }}
        style={{ marginTop: 25 }}
      />
    </>
  );
};

export default WePagination;
