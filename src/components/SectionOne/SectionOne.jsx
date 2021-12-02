import React from "react"
import NavBar from "../NavBar/NavBar"

import "animate.css"

import "./style.css"

const SectionOne = () => {
  return (
    <div className="container px-28 section text-center flex bg-landing-hero test-background">
      <NavBar />
      <h1 className="text-white animate__animated animate__backInDown">
        SECTION ONE 🚀
      </h1>
    </div>
  )
}

export default SectionOne
