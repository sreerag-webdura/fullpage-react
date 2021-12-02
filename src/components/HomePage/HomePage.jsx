/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

import SectionOne from "../SectionOne/SectionOne"

const MySection = ({ content }) => {
  return (
    <div className="section text-center flex">
      <h1>{content}</h1>
    </div>
  )
}

const anchors = ["Landing", "SecondSection", "ThirdSection"]

const HomePage = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#ff5f45", "#30bfbf", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction })
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi) // eslint-disable-line no-console

      return (
        <div>
          <SectionOne content={"Slide down!"} />
          <MySection content={"SECOND SECTION 🧑‍💻"} />
          <MySection content={"END OF SECTION ⚠️"} />
        </div>
      )
    }}
  />
)

export default HomePage
