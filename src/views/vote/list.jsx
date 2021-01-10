import React from "react";
import { Card, Progress, Alert } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";
import { WeDrawer } from "@/components";
import Detail from "./components/detail";
import "./style.less";
const { del, edit } = authorized.messageBoard;
const { messageBoard: coding } = codings;

class List extends React.Component {
  state = {
    params: {},
    dataSource: {},
  };

  componentDidMount() {
    this.setState(
      {
        params: getQuery(),
      },
      () => {
        this.getData();
      }
    );
  }

  getData = () => {
    this.props.dispatch
      .fetch({
        api: "selectVoteList",
        data: {
          page: 0,
          pagesize: 25,
          id: this.state.params.id,
        },
        node: "object",
      })
      .then((res) => {
        this.setState({
          dataSource: res.result,
        });
      });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <Card
        title="项目信息 * 进行中"
        extra={
          <WeDrawer.Form
            name="修改项目信息"
            isText={true}
            action="edit"
            data={{ id: dataSource.id }}
            detailApi="selectVoteList"
            api="updateVote"
            renderList={this.getData}
            authorized={checkButtonAuth("edit")}
            {...this.props}
          >
            <Detail />
          </WeDrawer.Form>
        }
      >
        <Alert
          description="说明: 投票开始之后到结束均不能编辑项目信息和添加删除投票选项。"
          type="info"
        />
        <div className="item-wrap">
          <div className="item-list">
            <div className="label">项目名称：</div>
            <div className="content">{dataSource.name}</div>
          </div>
          <div className="item-list">
            <div className="label">有效时间：</div>
            <div className="content">{`${dataSource.start_time} 至 ${dataSource.last_time}`}</div>
          </div>
          <div className="item-list">
            <div className="label">投票权限：</div>
            <div className="content">
              {dataSource.grade === "1"
                ? "所有人都可参与"
                : "仅关注我的人可参与"}
            </div>
          </div>
          <div className="item-list">
            <div className="label">投票说明</div>
            <div className="content">{dataSource.content}</div>
          </div>
          <div className="item-list">
            <div className="label">投票人数：</div>
            <div className="content">{dataSource.votenum}</div>
          </div>
        </div>

        <div className="item-wrap">
          <div className="item-list">
            <div className="label">标题</div>
            <div className="content">{dataSource.votetitle}</div>
          </div>
          <div className="item-list">
            <div className="label">投票种类</div>
            <div className="content">
              {dataSource.choose === "1" ? "多投" : "单投"}
            </div>
          </div>
          <div className="item-list">
            <div className="label">票数</div>
            <div className="content">
              {dataSource.choose === "1" ? dataSource.vote : 1}票 (每人)
            </div>
          </div>
          {dataSource.list &&
            dataSource.list.map((item) => (
              <div className="item-list">
                <div className="label">{item.votetitle}</div>
                <div className="content">
                  <Progress percent={30} />
                </div>
                <div className="right">{item.vote}票</div>
              </div>
            ))}
        </div>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.vote,
  }),
  dispatchToProps
)(List);
