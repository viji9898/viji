import React, { useState, useEffect } from "react";

import { createFromIconfontCN } from '@ant-design/icons';
import { Card } from 'antd';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const footer = () => {
  return (
    <div style={{ width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: "50px",
     }}>
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div >
      <div style={{textAlign: "center"}}>
      <h4>Learning, Living One Day at a time</h4>
      <div>
        <IconFont type="icon-linkedin" />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" />
        <IconFont type="icon-github" />
      </div>
      </div>
    </div>
  ) 
}

export default footer

