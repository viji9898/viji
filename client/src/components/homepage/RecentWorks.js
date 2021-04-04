import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faDatabase } from '@fortawesome/free-solid-svg-icons'

import { Card, Col, Row, Space, Popover, Button } from 'antd';
const { Meta } = Card;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const cogs = <FontAwesomeIcon icon={faCogs} size={"1x"} />

const RecentWorks = () => {

  const [size, setSize] = useState('large')

  return (
    <div style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: "50px",
    }}>
    <div className="site-card-wrapper">
      {/* <h3>Recent Projects</h3> */}
      <Row gutter={16}>
        <Col span={8}>
          <Card Card
            hoverable
            // style={{ width: 240 }}
            bordered={true}>
            <div style={{display: "inline-flex"}}>
              <FontAwesomeIcon icon={faDatabase} size={"6x"} />
              <div style={{display: "inline-bloc"}}>
                <Meta title="DataDrivenFitness"  description=""  style={{paddingLeft:"20px"}}/>
                <br/>
                <div style={{display: "inline-flex", marginLeft:"20px", alignItems: "center", justifyContent: "center"}}>
                   <FontAwesomeIcon icon={faCogs} size={"1x"}/> 
                   <p>Under Development</p>
                </div>
              </div>
            </div>
            
          </Card>            
        </Col>
        <Col span={8}>
        <Card Card
            hoverable
            // style={{ width: 240 }}
            cover={<img alt="example" sc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            bordered={true}>
            <p>Card content</p>
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </Col>
        <Col span={8}>
        <Card Card
            hoverable
            // style={{ width: 240 }}
            cover={<img alt="example" sc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            bordered={true}>
            <p>Card content</p>
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default RecentWorks