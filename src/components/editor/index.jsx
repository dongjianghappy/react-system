    import React, { useState, useEffect } from 'react';
    import E from 'wangeditor'
    
    let editor = null
    const Editor = (props) => {
    
      const [content, setContent] = useState('')
    
      useEffect(() => {
        // 注：class写法需要在componentDidMount 创建编辑器
        editor = new E("#div1")
    
        editor.config.onchange = (newHtml) => {
            props.getData(newHtml)
          setContent(newHtml)
        }
        /**一定要创建 */
        editor.create()
        editor.txt.html(props.content)
        return () => {
          // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
          editor.destroy()
        }
      }, [])
    
      return (
        <div>
          <div id="div1"></div>
        </div>
      );
    }
    

export default Editor