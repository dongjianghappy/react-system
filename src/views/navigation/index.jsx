import React from "react";
import { Space, Card } from "antd";
import { connect, dispatchToProps, checkButtonAuth } from "@/utils";
import { Status, Quick } from "@/components";

class Index extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.props.dispatch.select({
      api: "channelNavigation",
      node: "channel",
    });
  };

  render() {
    const { channel } = this.props.module;
    return (
      <>
        <Card title="导航管理">
          <table width="100%" className="table-striped col-left-23">
            {channel.map((item, index) => (
              <>
                <tr>
                  <td className="col-md-1 bd0">
                    <Card style={{ height: 70 }}>{item.name}</Card>
                  </td>
                  <td className="col-md-4">
                    <Card style={{ height: 70 }}>
                      {item.navid && (
                        <Quick
                          title={item.navname}
                          data={{
                            id: item.navid,
                            field: "name",
                            coding: "P0001",
                          }}
                          authorized={checkButtonAuth("edit")}
                          {...this.props}
                        />
                      )}
                    </Card>
                  </td>
                  <td className="col-md-4">
                    <Card style={{ height: 70 }}>
                      {item.navid && (
                        <Quick
                          title={item.url}
                          data={{
                            id: item.navid,
                            field: "url",
                            coding: "P0001",
                          }}
                          authorized={checkButtonAuth("edit")}
                          {...this.props}
                        />
                      )}
                    </Card>
                  </td>
                  <td className="col-md-2">
                    <Card style={{ height: 70 }}>
                      <Space>
                        <span
                          onClick={() =>
                            this.props.history.push(
                              `/admin/navigation/main?channel=${item.id}&name=${item.name}`
                            )
                          }
                        >
                          导航栏
                        </span>
                        <span
                          onClick={() =>
                            this.props.history.push(
                              `/admin/navigation/single?channel=${item.id}&name=${item.name}`
                            )
                          }
                        >
                          单页
                        </span>
                      </Space>
                    </Card>
                  </td>
                  <td className="col-md-1">
                    <Card style={{ height: 70 }}>
                      {item.navid && (
                        <Status
                          data={{
                            item: { id: item.navid, status: item.status },
                            field: "status",
                            coding: "P0001",
                          }}
                          authorized={checkButtonAuth("edit")}
                          {...this.props}
                        />
                      )}
                    </Card>
                  </td>
                </tr>
              </>
            ))}
          </table>
        </Card>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.navigation,
  }),
  dispatchToProps
)(Index);
