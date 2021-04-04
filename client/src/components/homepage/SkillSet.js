import React, { useState, useEffect } from "react";

import { Card, Col, Row } from 'antd';
import { EditTwoTone } from '@ant-design/icons'


const SkillSet = () => {


  const designData = (
    <diV>
      <div className="icons-list" style={{ fontSize: "30px" }}>
        <EditTwoTone />
      </div>

        <li>I value simple content structure</li>
        <li>lean design patterns,</li> 
        <li>and thoughtful interactions.</li>


      <h5>Things I enjoy designing</h5>
      <p>UX, UI, Web, Mobile, Apps, Logos</p>

      <h5>Design Tools</h5>

        <li>Figma</li>
        <li>Balsamiq</li>
        <li>Lucid</li>
        <li>Cypress</li>
        <li>Jest</li>

    </diV>
  )

  const frontEndData = (
    <diV>
      <div className="icons-list" style={{ fontSize: "30px" }}>
        <EditTwoTone />
      </div>

        <li>I like to code things from scratch, and</li>
        <li>enjoy bringing ideas to life in the</li> 
        <li>browser.</li>


      <h5>Languages I speak:</h5>
      <p>HTML, CSS, Javascript</p>

      <h5>Design Tools</h5>
 
        <li>React</li>
        <li>Ant Design</li>
        <li>GitHub</li>

    </diV>
  )

  const backEndData = (
    <diV>
      <div className="icons-list" style={{ fontSize: "30px" }}>
        <EditTwoTone />
      </div>
  
        <li>I value simple content structure</li>
        <li>lean design patterns,</li> 
        <li>and thoughtful interactions.</li>


      <h5>Core Design</h5>
      <p>Node, Express</p>

      <h5>Design Tools</h5>      
        <li>Node</li>
        <li>Express</li>
        <li>Postgress</li>
        <li>Passport</li>
        <li>Marvel</li>
    </diV>
  )

  return (
    <div 
      style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: "50px",
    }}>
      <div className="site-card-wrapper" style={{marginTop:"-150px", textAlign:"center"}}>
            <Row gutter={16}>
          <Col span={8}>
            <Card title="Design" bordered={true}>
              {designData}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Front-end Developer" bordered={true}>
              {frontEndData}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Back-end Developer" bordered={true}>
              {backEndData}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )

}

export default SkillSet