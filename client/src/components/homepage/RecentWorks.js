import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faDatabase } from '@fortawesome/free-solid-svg-icons'

import { Card, Col, Row, Space, Popover, Button} from 'antd';
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
      <h3 style={{textAlign: "center"}}>Recent Projects</h3>
      <Row gutter={[16, { xs: 6, sm: 16, md: 24, lg: 32 }]}>
        <Col span={8} md={{ span: 8 }} xs={{ span: 24}}>
          <Card Card
            hoverable
            // style={{ width: 240 }}
            bordered={true}>
            <div style={{display: "inline-flex"}}>
              <FontAwesomeIcon icon={faDatabase} size={"6x"} />
              <div style={{display: "inline-bloc"}}>
                <Meta title="Data Driven Fitness"  description=""  style={{paddingLeft:"20px"}}/>
                <br/>
                <div style={{display: "inline-flex", marginLeft:"20px", alignItems: "center", justifyContent: "center"}}> 
                   <p>Under Development</p>
                </div>
              </div>
            </div>
            
          </Card>            
        </Col>
        <Col span={8} md={{ span: 8 }} xs={{ span: 24}}>
        <Card Card
            hoverable
            // style={{ width: 240 }}
            // cover={<img alt="example" sc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            bordered={true}>
            <div style={{display: "inline-flex"}}>
              <FontAwesomeIcon icon={faDatabase} size={"6x"} />
              <div style={{display: "inline-bloc"}}>
                <Meta title="Data Driven Fitness"  description=""  style={{paddingLeft:"20px"}}/>
                <br/>
                <div style={{display: "inline-flex", marginLeft:"20px", alignItems: "center", justifyContent: "center"}}> 
                   <p>Under Development</p>
                </div>
              </div>
            </div>
           </Card>
        </Col>
        <Col span={8} md={{ span: 8 }} xs={{ span: 24}}>
        <Card
            hoverable
            // style={{ width: 240 }}
           
            bordered={true}
          >
            <div style={{display: "inline-flex"}}>
              <FontAwesomeIcon icon={faDatabase} size={"6x"} />
              <div style={{display: "inline-bloc"}}>
                <Meta title="Data Driven Fitness"  description=""  style={{paddingLeft:"20px"}}/>
                <br/>
                <div style={{display: "inline-flex", marginLeft:"20px", alignItems: "center", justifyContent: "center"}}> 
                   <p>Under Development</p>
                </div>
              </div>
            </div>
            {/* <Meta title="Europe Street beat" /> */}
           </Card>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default RecentWorks