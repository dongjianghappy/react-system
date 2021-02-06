import React from "react";
import { Card, Avatar } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Confirm, WeCheckbox } from "@/components";

const { cancel } = authorized.user.recommend;
const { recommend: coding } = codings;

class UserRecommend extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "userRecommend",
      node: "recommend",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { recommend } = this.props.module;
    return (
      <Card>
        <div className="nav-title">用户推送</div>
        <table width="100%" className="table-striped table-hover col-left-23">
          <tr class="th">
            <td class="col-md-1">选择</td>
            <td class="col-md-2">头像</td>
            <td class="col-md-7">用户名</td>
            <td class="col-md-2">操作</td>
          </tr>
          {recommend &&
            recommend.map((item, index) => (
              <tr>
                <td>
                  <WeCheckbox
                    data={{ id: item.id }}
                    {...this.props}
                  ></WeCheckbox>
                </td>
                <td>
                  <Avatar src={item.photos} />
                </td>
                <td>{item.nickname}</td>
                <td>
                  <Confirm
                    name="取消推送"
                    config={{
                      operating: "cancelRecommend",
                      message: React.$modalEnum.user,
                    }}
                    data={{ coding, uid: item.account }}
                    api="push"
                    renderList={this.getData}
                    authorized={checkButtonAuth(cancel)}
                    {...this.props}
                  />
                </td>
              </tr>
            ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserRecommend);
