import React, { useState, useEffect } from "react";
import E from "wangeditor";

// 使用方式
// 引入组件editor
// 在父组件中声明以下方式
// 声明
// state = {
//   data: {
//     content: ""
//   }
// }
// // 初始化数据
// renderInit = (data) => {
//   this.setState({
//     data: data
//   })
// }

// // 更新数据
// setData = (type, value) => {
//   const data = {...this.state.data}
//   data[type] = value
//   this.setState({
//     data: data
//   })
// }
// 然后传出到editor组件
// <Editor
//   field="content"
//   value={this.state.content}
//   change={this.setData}
// />

let editor = null;
const Editor = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // 注：class写法需要在componentDidMount 创建编辑器
    editor = new E("#div1");

    editor.config.onchange = (newHtml) => {
      debugger;

      props.callback({
        content: newHtml,
      });

      // props.change(props.field, newHtml);
      setContent(newHtml);
    };
    /**一定要创建 */
    editor.create();
    debugger;
    editor.txt.html(props.value);
    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy();
    };
  }, [props.value]);

  return (
    <div>
      <div id="div1"></div>
    </div>
  );
};

export default Editor;
