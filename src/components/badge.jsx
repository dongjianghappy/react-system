import React from "react";
import { MailOutlined } from "@ant-design/icons";

const NavGroup = (props) => {
  const { content, num } = props;
  return (
    <>
      <span className="badge">
        {content}
        <sup className="number">{num > 99 ? "99+" : num}</sup>
      </span>
    </>
  );
};

export default NavGroup;
