import React, { useState, useEffect } from "react";

const introData = `Since beginning my journey as a freelance designer nearly
10 years ago I've done remote work for agencies, consulted for
startups, and collaborated with talented people to create digital 
products for both business and consumer use. I'm quietly
confident, naturally curious, and perpetually working on improving
my chops one design problem at a time.`

const Intro = () => {
  return (
    <div style={{backgroundColor: "lightblue"}}>
    <div style={{
      marginLeft: "auto",
      marginRight: "auto",
      width: "25em",
      textAlign: "center",
      paddingTop: "75px",
      paddingBottom: "150px"
    }} height={5000} >
      {introData}
    </div>
      </div>
  )
}

export default Intro