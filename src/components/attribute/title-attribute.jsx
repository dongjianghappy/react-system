import React, { useState } from 'react'
import { Popover } from 'antd'


const TitleAttribute = (props) => {

  const [bold, setBold] = useState(false)
  const [style, setStyle] = useState(false)
  const [underline, setUnderline] = useState(false)
  const [color, setColor] = useState("")

  const content = () => {
    const data = ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF","#AEA1FF", "#FDA1FF",
    "#333333", "#808080", "#CCCCCC", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF",
    "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"

    ]

    return (
      <>
        <div style={{display: 'flex', flexWrap: 'wrap', width: 432}}>
        {
          data.map((item, index) => (
            <div style={{width: 36, height: 36}}>
              <div onClick={() => handleColor(item)} style={{background: item, margin: 3, border: '1px solid #ddd', width: 30, height: 30}}> </div>
            </div>
          ))
        }
        </div>
        <div style={{display: 'flex'}}>
          <div style={{background: color, marginLeft: 3, marginTop: 3, width: 16, height: 16}}></div>
          <div style={{marginLeft: 5}}>{color}</div>
        </div>
      </>
    )
  }

  const handleBold = () => {
    setBold(!bold)
  }

  const handleStyle = () => {
    setStyle(!style)
  }

  const handleUnderline = () => {
    setUnderline(!underline)
  }  

  const handleColor = (data) => {
    setColor(data)
  }

  return (
    <>
    <div style={{width: 150, display: 'flex', justifyItems: 'flex-start'}}>
      <span style={{background:(color || "none"), margin: '0 5px', display: "flex", width: 32, height: 32, justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', fontWeight: 'bold', fontStyle: 'italic'}}>
      <Popover placement="bottom" trigger="hover" content={content}>
        <div style={{width: 32, height: 32, color: "#fff"}}></div>
      </Popover>
      </span>
      <span onClick={handleBold} style={{ background:(bold ? "#f1f1f1" : "none"), marginRight: 5, display: "flex", width: 32, height: 32, justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', fontWeight: 'bold'}}>
        B
      </span>
      <span onClick={handleStyle} style={{background:(style ? "#f1f1f1" : "none"), marginRight: 5, display: "flex", width: 32, height: 32, justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', fontStyle: 'italic'}}>
        I
      </span>
      <span onClick={handleUnderline} style={{background:(underline ? "#f1f1f1" : "none"), marginRight: 5, display: "flex", width: 32, height: 32, justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc'}}>
        U
      </span>
      </div>
    </>
  )
}

export default TitleAttribute
