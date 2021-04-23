import React, { useState, useEffect } from "react";

const Kindeditor = (props) => {
  const { content, action } = props;
  const [status, setStatus] = useState(false);
  debugger;
  window.KindEditor.ready(function (K) {
    K.create('textarea[name="con"]', {
      allowFileManager: true,
    });
  });

  useEffect(() => {
    if (content !== undefined) {
      setStatus(true);
    }
    if (document.getElementsByTagName("iframe").length != 0) {
      debugger;
      document.getElementsByTagName(
        "iframe"
      )[0].contentWindow.window.document.body.innerHTML = content;
    }
  }, [content]);

  return (
    <>
      <textarea
        id="#form-content"
        name="con"
        style={{ width: "100%", height: "400px", visibility: "hidden" }}
      >
        {content}
      </textarea>
    </>
  );
};

export default Kindeditor;
