import React, { useState, useEffect } from "react";

import ninja from "../../images/ninja-computer-programming-github-avatar.png"

const homePage = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white"
    }}>
      <div>
        <h1>Designer, Full Stack Developer</h1>
        <p> I design and code beautifully simple things, and I love what I do.</p>
      </div>
      <div>
        <img src={ninja} width={300}/>
      </div>
    </div>
  ) 
}

export default homePage