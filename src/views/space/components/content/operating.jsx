import React from "react";
import { message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Confirm, WeModal } from "@/components";
import { checkButtonAuth } from "@/utils";

const Detail = (props) => {
  const { item } = props;

  const handleCopy = () => {
    message.info("复制成功");
  };
  return (
    <>
      <div className="space-operating">
        <WeModal.Copy
          title="复制代码"
          icon="copy"
          ok={() => (
            <CopyToClipboard
              text={`<img src=${item.img_url} />`} // 需要复制的文本
              onCopy={handleCopy} // 复制完成的回调
            >
              <a>复制</a>
            </CopyToClipboard>
          )}
        >
          {`<img src=${item.img_url} />`}
        </WeModal.Copy>

        <WeModal.Copy
          title="复制地址"
          icon="url"
          ok={() => (
            <CopyToClipboard
              text={item.img_url} // 需要复制的文本
              onCopy={handleCopy} // 复制完成的回调
            >
              <a>复制</a>
            </CopyToClipboard>
          )}
        >
          {item.img_url}
        </WeModal.Copy>
        <span>
          <Confirm
            {...props}
            icon="recycle"
            config={{
              operating: "delete",
              message: React.$modalEnum,
            }}
            data={{ img: item.path }}
            api="deletefile"
            authorized={checkButtonAuth("delete")}
          />
        </span>
      </div>
    </>
  );
};

export default Detail;
